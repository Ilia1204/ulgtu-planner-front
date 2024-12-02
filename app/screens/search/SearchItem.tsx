import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import UserSvg from '@/navigation/bottom-menu/bottom-menu-svg/UserSvg'
import { getClassTypeTranslation } from '@/shared/types/class.interface'
import { IGroup } from '@/shared/types/group.interface'
import { roomTypeTranslation } from '@/shared/types/room.interface'
import { groupByDay } from '@/utils/group-by-day'
import { shortenName } from '@/utils/shorten-name'
import React, { FC } from 'react'
import { Pressable, ScrollView, View } from 'react-native'
import BackIconSvg from '../profile/profile-screens/academic-semesters/BackIconSvg'
import SkeletonProfile from '../profile/profile-screens/useful-links/SkeletonProfile'
import ScheduleItem from '../schedule/schedule-elements/ScheduleItem'
import SkeletonSchedule from '../schedule/schedule-skeleton/SkeletonSchedule'
import { getCurrentDay } from '../schedule/utils/get-current-day'
import { getCurrentTime } from '../schedule/utils/get-current-time'
import { getLessonTimes } from '../schedule/utils/schedule-times'
import { schedulesStyles } from '../schedule/utils/schedules.styles'
import { useGroupById } from './hooks/useGroupById'
import { useRoomById } from './hooks/useRoomById'
import { useTeacherById } from './hooks/useTeacherById'
import GroupSvg from './search-svg/GroupSvg'
import RoomSvg from './search-svg/RoomSvg'

const SearchItem: FC = () => {
	const { goBack } = useTypedNavigation()
	const { params } = useTypedRoute<'SearchItem'>()

	const { group, isFetching: isFetchingGroup } =
		params.type === 'group'
			? useGroupById(params.id)
			: ({} as {
					group: IGroup
					isFetching: boolean
					isPending: false
				})
	const { room, isFetching: isFetchingRoom } = useRoomById(params.id)
	const { teacher, isFetching: isFetchingTeacher } = useTeacherById(params.id)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<Pressable
				className='flex-row items-center px-4 border-b-[#3c3c4321] '
				style={{ height: 50, borderBottomWidth: 0.5 }}
				onPress={goBack}
			>
				<BackIconSvg />
				<ProTextRegular
					text={params.title}
					className='text-light-graphics-blue ml-0.5'
					style={{ fontSize: 17 }}
				/>
			</Pressable>
			<ScrollView showsVerticalScrollIndicator={false}>
				{isFetchingTeacher || isFetchingRoom || isFetchingGroup ? (
					<>
						<SkeletonProfile />
						<View className='mt-3.5' />
						<SkeletonSchedule />
					</>
				) : (
					<>
						<View className='bg-white p-5 flex-row items-center'>
							<View className='flex-1'>
								<ProTextSemiBold
									className='text-light-graphics-blue text-xs'
									style={{ letterSpacing: 0.06 }}
									text={
										teacher
											? teacher?.position?.toUpperCase()
											: room
												? roomTypeTranslation(room?.type)?.toUpperCase()
												: 'ГРУППА'
									}
								/>
								<ProTextSemiBold
									className='text-light-label-primary mt-1.5'
									style={{ letterSpacing: -0.08 }}
									text={
										teacher
											? teacher?.user?.fullName
											: room
												? room.name
												: group.name
									}
								/>
								<ProTextRegular
									className='text-light-graphics-gray mt-1'
									style={{ letterSpacing: -0.08 }}
									text={
										teacher
											? teacher?.user?.email
											: room
												? room.address
												: group?.flow?.faculty
									}
								/>
							</View>
							<View
								className='w-16 h-16 rounded-full bg-light-graphics-gray6 justify-center items-center'
								style={{ elevation: 3 }}
							>
								{teacher ? (
									<UserSvg color={COLORS.light.graphics.gray} />
								) : room ? (
									<RoomSvg />
								) : (
									<GroupSvg />
								)}
							</View>
						</View>
						<View className='mt-3'>
							{group?.classes ? (
								group?.classes.length ? (
									groupByDay(group.classes).map(([key, lessons]) => (
										<View key={key}>
											<ProTextMedium
												text={key}
												className='px-5 text-light-graphics-gray my-3.5'
											/>
											{lessons
												.map(lesson => {
													const sortedPairNumbers = [
														...lesson.pairNumbers
													].sort((a, b) => a - b)

													return sortedPairNumbers.map(pairNumber => ({
														lesson,
														pairNumber
													}))
												})
												.flat()
												.sort((a, b) => a.pairNumber - b.pairNumber)
												.map(({ lesson, pairNumber }, lessonIndex, array) => {
													const showTime = array
														.slice(0, lessonIndex)
														.every(
															prevLesson => prevLesson.pairNumber !== pairNumber
														)

													const isCurrentDay = getCurrentDay(lesson)
													const lessonTimes = getLessonTimes(pairNumber)
													const isCurrentTime = getCurrentTime(
														lessonTimes.start,
														lessonTimes.end
													)

													return (
														<ScheduleItem
															lesson={lesson}
															pairNumber={pairNumber}
															showTime={showTime}
															isCurrentDay={isCurrentDay}
															isCurrentTime={isCurrentTime}
														/>
													)
												})}
										</View>
									))
								) : (
									<ProTextRegular
										text='Пары в системе планирования расписаний для этой группы не найдены 🤔'
										style={{ letterSpacing: -0.08, lineHeight: 18 }}
										className='text-center text-light-graphics-gray px-4'
									/>
								)
							) : (
								<>
									{(teacher ? teacher : room)?.classes?.length > 0 ? (
										groupByDay((teacher ? teacher : room).classes).map(
											([key, lessons]) => (
												<View key={key}>
													<ProTextMedium
														text={key}
														className='px-5 text-light-graphics-gray my-3.5'
													/>
													{lessons?.map(lesson =>
														lesson.pairNumbers.map(pairNumber => (
															<View
																key={`${lesson?.id}-${pairNumber}`}
																className={`bg-white flex-row gap-x-2.5 pb-3`}
															>
																<View
																	className='self-start items-center py-3 pt-2'
																	style={{ width: 65 }}
																>
																	<View
																		key={pairNumber}
																		className='mb-2 items-center'
																	>
																		<ProTextSemiBold
																			text={getLessonTimes(pairNumber).start}
																			style={{ fontSize: 15 }}
																			className='mb-0.5'
																		/>
																		<ProTextRegular
																			text={getLessonTimes(pairNumber).end}
																			style={{ color: 'rgba(60, 60, 67, 0.6)' }}
																		/>
																		<View className='mt-1 absolute -bottom-5'>
																			<ProTextRegular
																				className='text-light-graphics-gray text-xs'
																				style={{ letterSpacing: -0.08 }}
																				text={`(${pairNumber}-ая)`}
																			/>
																		</View>
																	</View>
																</View>
																<View
																	style={{ ...schedulesStyles.verticalLine }}
																/>
																<View className='flex-1 pr-3.5 pt-2.5 gap-y-1.5'>
																	<ProTextSemiBold
																		className='text-light-graphics-blue'
																		style={{
																			letterSpacing: 0.06,
																			fontSize: 12
																		}}
																		text={getClassTypeTranslation(
																			lesson.type
																		).toUpperCase()}
																	>
																		<ProTextMedium
																			className='text-light-graphics-gray'
																			style={{
																				letterSpacing: 0.06,
																				fontSize: 12
																			}}
																			text={`${
																				lesson?.group?.name
																					? ` (${lesson?.group?.name.toUpperCase()})`
																					: ' (ПОТОКОВАЯ)'
																			}`}
																		/>
																	</ProTextSemiBold>
																	<ProTextSemiBold
																		style={{
																			letterSpacing: -0.08,
																			lineHeight: 20
																		}}
																		text={`${lesson.discipline.name} ${lesson?.teacher?.user ? `(${shortenName(lesson?.teacher?.user?.fullName)})` : ''} ${
																			lesson?.subgroup?.name
																				? `- ${lesson?.subgroup?.name}`
																				: ''
																		}`}
																	/>
																	<ProTextRegular
																		className='text-light-graphics-gray text-xs'
																		style={{ letterSpacing: -0.08 }}
																		text={`Ауд. ${lesson?.room?.name}, ${lesson?.room?.address}`}
																	/>
																</View>
															</View>
														))
													)}
												</View>
											)
										)
									) : (
										<ProTextRegular
											text={`Пары в системе планирования расписаний ${teacher ? 'для этого преподавателя' : 'для этой аудитории'} не найдены 🤔`}
											style={{ letterSpacing: -0.08, lineHeight: 20 }}
											className='text-center text-light-graphics-gray px-4'
										/>
									)}
								</>
							)}
						</View>
					</>
				)}
			</ScrollView>
		</View>
	)
}

export default SearchItem
