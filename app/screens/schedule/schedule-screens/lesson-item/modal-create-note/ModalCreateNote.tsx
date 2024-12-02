import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useProfile } from '@/screens/profile/useProfile'
import React, { FC } from 'react'
import { Controller } from 'react-hook-form'
import { Pressable, Switch, TextInput, View } from 'react-native'
import Modal from 'react-native-modal'
import { IModalCreateNote } from './modal-create-note.interface'

const ModalCreateNote: FC<IModalCreateNote> = props => {
	const { isVisible, setIsVisible, control, handleSubmit, onSubmit } = props
	const { data: user } = useProfile()

	return (
		<Modal
			isVisible={isVisible}
			animationIn='fadeIn'
			avoidKeyboard={false}
			onBackdropPress={() => setIsVisible(false)}
			animationOut='fadeOut'
		>
			<View
				className='bg-light-background-tertiary rounded-xl p-3.5 px-0'
			>
				<View
					className='flex-row pb-3'
					style={{
						borderBottomWidth: 0.5,
						borderBottomColor: '#E0E0E1'
					}}
				>
					<Pressable className='w-1/3' onPress={() => setIsVisible(false)}>
						<ProTextRegular
							className='text-light-graphics-blue text-base text-center'
							style={{ letterSpacing: -0.24 }}
							text='Отменить'
						/>
					</Pressable>
					<Pressable className='w-1/3'>
						<ProTextSemiBold
							className='text-lig	ht-label-primary text-base text-center'
							style={{ letterSpacing: -0.24 }}
							text='Заметка'
						/>
					</Pressable>
					<Pressable className='w-1/3' onPress={handleSubmit(onSubmit)}>
						<ProTextMedium
							className='text-light-graphics-blue text-base text-center'
							style={{ letterSpacing: -0.24 }}
							text='Готово'
						/>
					</Pressable>
				</View>
				<View className='mt-4'>
					<Controller
						control={control}
						name='content'
						rules={{ required: 'Пожалуйста, заполните текст заметки' }}
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<>
								<TextInput
									className='px-5 py-3.5 text-base bg-white'
									value={value}
									onChangeText={onChange}
									multiline
									placeholder='Введите текст'
									placeholderTextColor={COLORS.light.graphics.gray}
									autoCorrect={false}
									style={{
										fontFamily: 'pro-text-regular',
										letterSpacing: -0.24,
										borderTopWidth: 0.5,
										borderTopColor: 'rgba(60, 60, 67, 0.13)',
										borderBottomWidth: 0.5,
										borderBottomColor: 'rgba(60, 60, 67, 0.13)'
									}}
									selectionColor={COLORS.light.graphics.blue}
								/>
								{error && (
									<ProTextRegular
										className='text-red-500 px-5 mt-2'
										style={{ fontFamily: 'medium' }}
										text={error.message}
									/>
								)}
							</>
						)}
					/>
					{user?.employmentInfo ? (
						<Controller
							control={control}
							name='isPrivate'
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<>
									<View className='flex-row items-center px-5 gap-x-2'>
										<ProTextRegular
											className='text-light-graphics-gray'
											style={{ letterSpacing: -0.08, fontSize: 15 }}
											text='Сделать закрытой'
										/>
										<Switch
											value={value}
											className='self-start'
											onValueChange={onChange}
											thumbColor={value ? COLORS.light.graphics.blue : '#666'}
											trackColor={{ false: '#ccc', true: '#ccc' }}
										/>
										<ProTextRegular
											className='text-light-graphics-gray'
											style={{ letterSpacing: -0.08, fontSize: 15 }}
											text={`(${value ? 'Да' : 'Нет'})`}
										/>
									</View>
									{error && (
										<ProTextRegular
											className='text-red-500'
											style={{ fontFamily: 'medium' }}
											text={error.message}
										/>
									)}
								</>
							)}
						/>
					) : null}
				</View>
			</View>
		</Modal>
	)
}

export default ModalCreateNote
