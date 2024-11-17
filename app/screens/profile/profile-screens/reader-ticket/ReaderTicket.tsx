import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { getEducationLevelTranslation } from '@/shared/types/student-info.interface'
import React, { FC } from 'react'
import { Image, Pressable, StatusBar, View } from 'react-native'
import { useProfile } from '../../useProfile'
import BackIconSvg from '../academic-semesters/BackIconSvg'
import BarCodeSvg from './BarCodeSvg'

const ReaderTicket: FC = () => {
	const { goBack } = useTypedNavigation()
	const { data } = useProfile()

	const educationLevel = getEducationLevelTranslation(
		data?.studentInfo?.educationLevel as string
	)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<StatusBar backgroundColor={COLORS.light.background.tertiary} />
			<Pressable
				className='flex-row items-center self-start h-12 px-4'
				onPress={goBack}
			>
				<BackIconSvg />
				<ProTextRegular
					text='Профиль'
					className='text-light-graphics-blue ml-0.5'
					style={{ fontSize: 17 }}
				/>
			</Pressable>
			<View
				className='bg-white px-5 py-5 border-t-[#3c3c4321]'
				style={{ borderTopWidth: 0.5 }}
			>
				<View className='flex-row items-center justify-between'>
					<View className='flex-1'>
						<ProTextSemiBold
							className='text-light-graphics-blue text-xs'
							style={{ letterSpacing: 0.06 }}
							text={educationLevel?.toUpperCase()}
						/>
						<ProTextSemiBold
							className='text-light-label-primary mt-1.5 line'
							style={{ letterSpacing: -0.49, fontSize: 19 }}
							text={data?.fullName}
						/>
						<ProTextSemiBold
							className='text-light-label-secondary opacity-60 mt-2 text-xs'
							style={{ letterSpacing: 0.06 }}
							text='ЧИТАТЕЛЬ'
						/>
					</View>
					<Image
						source={require('@/assets/images/default-avatar.jpg')}
						className='rounded-full'
						style={{ width: 100, aspectRatio: 1 }}
					/>
				</View>
				<View className='mt-5 flex-row items-center justify-between'>
					<View>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs'
							text='ДАТА РЕГИСТРАЦИИ'
						/>
						<ProTextRegular
							className='mt-1'
							style={{ fontSize: 17, letterSpacing: -0.41 }}
							text='01.09.2023'
						/>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs mt-5'
							text='ДАТА РОЖДЕНИЯ'
						/>
						<ProTextRegular
							className='mt-1'
							style={{ fontSize: 17, letterSpacing: -0.41 }}
							text='20.12.2004'
						/>
					</View>
					<View>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs'
							text='НОМЕР ЧИТАТЕЛЬСКОГО'
						/>
						<ProTextRegular
							className='mt-1'
							style={{
								fontSize: 17,
								letterSpacing: -0.41
							}}
							text={data?.libraryCardNumber}
						/>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs mt-5'
							text='ГРУППА'
						/>
						<ProTextRegular
							className='mt-1'
							style={{ fontSize: 17, letterSpacing: -0.41 }}
							text={data?.studentInfo.group.name}
						/>
					</View>
				</View>
				<View className='mt-3'>
					<ProTextSemiBold
						style={{ letterSpacing: 0.06 }}
						className='text-light-label-secondary opacity-60 text-xs mt-5'
						text='ФАКУЛЬТЕТ'
					/>
					<ProTextRegular
						className='mt-1'
						style={{
							fontSize: 17,
							letterSpacing: -0.41,
							lineHeight: 24
						}}
						text={data?.studentInfo?.group.flow.faculty?.toUpperCase()}
					/>
					<View className='mt-8 items-center'>
						<BarCodeSvg />
					</View>
				</View>
			</View>
		</View>
	)
}

export default ReaderTicket
