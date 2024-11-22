import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { getClassTypeTranslation } from '@/shared/types/class.interface'
import { dayWeekTranslation } from '@/shared/types/schedule.interface'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Image, Pressable, ScrollView, View } from 'react-native'
import CalendarSvg from './CalendarSvg'
import { useSchedulesByUser } from './hooks/useSchedulesByUser'
import { getLessonTimes } from './utils/schedule-times'
import { schedulesStyles } from './utils/schedules.styles'

const Schedule: FC = () => {
	const { schedules, isPending } = useSchedulesByUser()

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.tertiary }}
		>
			<View
				className='px-4 flex-row items-center py-2.5 border-b-[#3c3c4321]'
				style={{
					borderBottomWidth: 0.5,
					backgroundColor: 'rgb(247, 247, 247)'
				}}
			>
				<View className='flex-1 items-center'>
					<ProTextSemiBold
						className='text-light-label-primary mb-1'
						text='Расписание'
						style={{ fontSize: 18 }}
					/>
				</View>
				<Pressable onPress={() => {}} className='absolute right-4'>
					<CalendarSvg />
				</Pressable>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='mt-5 flex-row items-center'>
					{Array.from({ length: 4 }).map((_, idx) => (
						<Pressable
							style={{ height: 120, width: 102 }}
							key={idx}
							className={idx === 3 ? 'mx-3' : 'ml-3'}
						>
							<Image
								source={require('@/assets/card.png')}
								style={{ height: 120, width: 102 }}
							/>
							<ProTextMedium
								text='Европейская научно-промышленная конференция'
								className='absolute z-50 text-white bottom-3 text-xs px-2.5'
								numberOfLines={2}
							/>
						</Pressable>
					))}
				</View>
				<View className='mt-3.5'>
					{schedules?.map(schedule => (
						<View key={schedule.id}>
							<ProTextMedium
								text={`${dayWeekTranslation(schedule.dayWeek).toUpperCase()}, ${dayjs(schedule.date).format('D MMMM').toUpperCase()}`}
								className={`px-5 text-light-graphics-gray my-3.5`}
							/>
							{schedule?.classes?.map(lesson => (
								<Pressable
									key={lesson.id}
									className={`bg-white flex-row gap-x-2.5 pb-3`}
									onPress={() => {}}
								>
									<View
										className='self-start items-center py-3 pt-2'
										style={{ width: 65 }}
									>
										<ProTextSemiBold
											text={getLessonTimes(lesson.pairNumber).start}
											style={{ fontSize: 15 }}
										/>
										<ProTextRegular
											text={getLessonTimes(lesson.pairNumber).end}
											style={{ color: 'rgba(60, 60, 67, 0.6)' }}
										/>
										<View className='mt-1 absolute -bottom-2'>
											<ProTextRegular
												className='text-light-graphics-gray text-xs'
												style={{ letterSpacing: -0.08 }}
												text={`(${lesson.pairNumber}-ая)`}
											/>
										</View>
									</View>
									<View style={{ ...schedulesStyles.verticalLine }} />
									<View className='flex-1 pr-3.5 pt-2.5 gap-y-1'>
										<ProTextSemiBold
											className='text-light-graphics-blue'
											style={{ letterSpacing: 0.06, fontSize: 12 }}
											text={getClassTypeTranslation(lesson.type).toUpperCase()}
										/>
										<ProTextSemiBold
											style={{ letterSpacing: -0.08, lineHeight: 20 }}
											text={lesson.discipline.name}
										/>
										<ProTextRegular
											className='text-light-graphics-gray text-xs'
											style={{ letterSpacing: -0.08 }}
											text={`Ауд. ${lesson.room.name}, ${lesson.room.address}`}
										/>
									</View>
								</Pressable>
							))}
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	)
}

export default Schedule
