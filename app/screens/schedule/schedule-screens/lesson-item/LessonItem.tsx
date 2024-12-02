import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import BackIconSvg from '@/screens/profile/profile-screens/academic-semesters/BackIconSvg'
import ArrowRightSvg from '@/screens/profile/profile-svg/common/ArrowRight'
import { useProfile } from '@/screens/profile/useProfile'
import { getClassTypeTranslation } from '@/shared/types/class.interface'
import { TypeNoteForm } from '@/shared/types/note.interface'
import dayjs from 'dayjs'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Pressable, ScrollView, StatusBar, View } from 'react-native'
import { useInitialDataNote } from '../../hooks/useInitialDataNote'
import ShareSvg from '../ShareSvg'
import { getLessonInfo } from '../utils/get-lesson-info'
import { sortAndGroupGroups } from '../utils/sort-groups'
import SkeletonLessonItem from './SkeletonLessonItem'
import ModalCreateNote from './modal-create-note/ModalCreateNote'
import NoteItem from './notes/NoteItem'
import { useNote } from './notes/hooks/useNote'
import { useLessonById } from './useLessonById'

const LessonItem: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	const { goBack, navigate } = useTypedNavigation()
	const { params } = useTypedRoute<'LessonItem'>()
	const { lesson, isPending, isFetching } = useLessonById(params.id)

	const { data: user } = useProfile()

	const { note, onSubmit, deleteAllNotes } = useNote(setIsVisible)
	const { reset, handleSubmit, control } = useForm<TypeNoteForm>({
		mode: 'onChange'
	})

	const deleteAllUserNotes = () =>
		Alert.alert(
			'Внимание',
			'Вы действительно хотите удалить все ваши заметки? Отменить данной действие будет невозможно',
			[
				{ text: 'Отмена' },
				{ text: 'Да', onPress: () => deleteAllNotes(lesson.id) }
			]
		)

	useInitialDataNote(reset, note, params?.id)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<StatusBar
				backgroundColor={
					!isVisible ? COLORS.light.background.tertiary : 'rgba(0, 0, 0, 0.7)'
				}
				barStyle={isVisible ? 'light-content' : 'dark-content'}
			/>
			<View
				className='flex-row items-center justify-between pl-2 pr-4 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5, height: 50 }}
			>
				<Pressable className='flex-row items-center' onPress={goBack}>
					<BackIconSvg />
					<ProTextRegular
						text='Расписание'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<ShareSvg />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				{isFetching ? (
					<SkeletonLessonItem />
				) : (
					<>
						<View className='pl-4 py-4 bg-white'>
							<ProTextSemiBold
								className='text-light-graphics-blue pr-4'
								style={{ letterSpacing: 0.06, fontSize: 13 }}
								text={getClassTypeTranslation(lesson.type).toUpperCase()}
							/>
							<ProTextSemiBold
								style={{ letterSpacing: -0.08, lineHeight: 24, fontSize: 16 }}
								text={`${lesson?.discipline?.name} ${lesson?.subgroup?.name ? `- ${lesson.subgroup.name}` : ''}`}
								className='pr-4 my-1.5'
							/>
							{getLessonInfo(lesson)
								.slice(0, 1)
								.map((lessonInfo, index) => (
									<View key={index}>
										<Pressable
											className='flex-row items-center pr-4 justify-between py-3.5'
											style={{
												borderBottomWidth: 0.5,
												borderBottomColor: 'rgba(60, 60, 67, 0.13)'
											}}
										>
											<ProTextRegular
												text={lessonInfo.text}
												style={{ fontSize: 15 }}
											/>
											<ArrowRightSvg />
										</Pressable>
										<Pressable
											className='flex-row items-center pr-4 justify-between py-3.5'
											onPress={() =>
												lessonInfo.room.path &&
												navigate('SearchItem', {
													id: lessonInfo.room.path || '',
													title: 'Занятие'
												})
											}
											style={{
												borderBottomWidth: 0.5,
												borderBottomColor: 'rgba(60, 60, 67, 0.13)'
											}}
										>
											<ProTextRegular
												text={lessonInfo.room.text}
												style={{ fontSize: 15 }}
											/>
											<ArrowRightSvg />
										</Pressable>
										<Pressable
											className='flex-row items-center pr-4 justify-between py-3.5'
											onPress={() =>
												lessonInfo.teacher.path &&
												navigate('SearchItem', {
													id: lessonInfo.teacher.path || '',
													title: 'Занятие'
												})
											}
											style={{
												borderBottomWidth: 0.5,
												borderBottomColor: 'rgba(60, 60, 67, 0.13)'
											}}
										>
											<ProTextRegular
												text={lessonInfo.teacher.text}
												style={{ fontSize: 15 }}
											/>
											<ArrowRightSvg />
										</Pressable>
									</View>
								))}
							{lesson?.flows?.length ? (
								<View
									className='mt-3 pb-3'
									style={{
										borderBottomWidth: 0.5,
										borderBottomColor: 'rgba(60, 60, 67, 0.13)'
									}}
								>
									<ProTextRegular
										className='text-light-graphics-gray mb-1.5'
										style={{ letterSpacing: 0.12, fontSize: 13 }}
										text='ИНФОРМАЦИЯ О ПОТОКЕ'
									/>
									{lesson.flows?.slice(0, 1).map((flow, idx) => {
										const groupNamesString = sortAndGroupGroups(
											flow.groups || []
										)

										return (
											<ProTextRegular
												key={idx + Math.random()}
												style={{
													letterSpacing: -0.08,
													lineHeight: 20,
													margin: 0,
													padding: 0
												}}
												text={groupNamesString}
											/>
										)
									})}
								</View>
							) : null}
							<View className='mt-3'>
								<ProTextRegular
									className='text-light-graphics-gray mb-1.5'
									style={{ letterSpacing: 0.12, fontSize: 13 }}
									text='ПОСЛЕДНИЕ ИЗМЕНЕНИЯ'
								/>
								<ProTextRegular
									style={{ letterSpacing: -0.08, lineHeight: 18 }}
									text={dayjs(lesson.updatedAt).format(
										'DD MMMM YYYY года, HH:mm'
									)}
								/>
							</View>
						</View>
						<View className='flex-row justify-between items-center my-3 px-4'>
							<ProTextMedium
								text='ЗАМЕТКИ'
								className='text-light-graphics-gray w-1/3'
							/>
							{lesson?.notes?.filter(note => note?.userId === user?.id)
								?.length ? (
								<Pressable onPress={deleteAllUserNotes}>
									<ProTextRegular
										text='Удалить все мои заметки'
										className='text-light-graphics-red -mt-0.5'
									/>
								</Pressable>
							) : null}
						</View>
						<ModalCreateNote
							isVisible={isVisible}
							setIsVisible={setIsVisible}
							onSubmit={onSubmit}
							control={control}
							handleSubmit={handleSubmit}
						/>
						{lesson?.notes?.length
							? lesson?.notes?.map(note => (
									<NoteItem note={note} key={note?.id} />
								))
							: null}
						<Pressable
							className='bg-white flex-row px-5 justify-between py-3.5'
							style={{
								borderTopWidth: 0.5,
								borderTopColor: 'rgba(60, 60, 67, 0.13)',
								borderBottomWidth: 0.5,
								borderBottomColor: 'rgba(60, 60, 67, 0.13)'
							}}
							onPress={() => setIsVisible(true)}
						>
							<ProTextRegular
								className='text-light-graphics-blue'
								text='Добавить заметку'
								style={{ fontSize: 15 }}
							/>
							<ArrowRightSvg color={COLORS.light.graphics.blue} />
						</Pressable>
						<ProTextMedium
							text='ФАЙЛЫ'
							className='px-4 text-light-graphics-gray my-3'
						/>
						<View
							className='bg-white flex-row px-5 justify-between py-3.5'
							style={{
								borderTopWidth: 0.5,
								borderTopColor: 'rgba(60, 60, 67, 0.13)',
								borderBottomWidth: 0.5,
								borderBottomColor: 'rgba(60, 60, 67, 0.13)'
							}}
						>
							<ProTextRegular
								className='text-light-graphics-blue'
								text='Добавить файл'
								style={{ fontSize: 15 }}
							/>
							<ArrowRightSvg color={COLORS.light.graphics.blue} />
						</View>
					</>
				)}
			</ScrollView>
		</View>
	)
}

export default LessonItem
