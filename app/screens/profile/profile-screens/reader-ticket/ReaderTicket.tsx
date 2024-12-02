import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import UserSvg from '@/navigation/bottom-menu/bottom-menu-svg/UserSvg'
import { getEducationLevelTranslation } from '@/shared/types/group.interface'
import { getMediaSource } from '@/utils/get-media-source'
import dayjs from 'dayjs'
import React, { FC } from 'react'
import { Image, Pressable, View } from 'react-native'
import { useProfile } from '../../useProfile'
import BackIconSvg from '../academic-semesters/BackIconSvg'
import BarCodeSvg from './BarCodeSvg'

const ReaderTicket: FC = () => {
	const { goBack } = useTypedNavigation()
	const { data } = useProfile()

	const educationLevel = data?.studentInfo
		? getEducationLevelTranslation(
				data?.studentInfo?.group?.educationLevel as string
			)
		: data?.employmentInfo.position

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<Pressable
				className='flex-row items-center self-start px-4'
				onPress={goBack}
				style={{ height: 50 }}
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
					{data?.avatarPath ? (
						<Image
							source={getMediaSource(data?.avatarPath)}
							className='rounded-full'
							style={{ width: 100, aspectRatio: 1 }}
							resizeMode='center'
						/>
					) : (
						<View
							className='rounded-full bg-light-graphics-gray6 justify-center items-center'
							style={{ width: 100, aspectRatio: 1 }}
						>
							<UserSvg color={COLORS.light.graphics.gray} size={28} />
						</View>
					)}
				</View>
				<View className='mt-5 flex-row  justify-between'>
					<View className='flex-1'>
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
							text={dayjs(data?.birthDate).format('DD.MM.YYYY')}
						/>
					</View>
					<View className='flex-1'>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs'
							text='НОМЕР ЧИТАТЕЛЬСКОГО'
						/>
						<ProTextRegular
							className='mt-1'
							style={{ fontSize: 17, letterSpacing: -0.41 }}
							text={data?.libraryCardNumber}
						/>
						<ProTextSemiBold
							style={{ letterSpacing: 0.06 }}
							className='text-light-label-secondary opacity-60 text-xs mt-5'
							text={data?.studentInfo ? 'ГРУППА' : 'КАФЕДРА'}
						/>
						<ProTextRegular
							className='mt-1'
							style={{ fontSize: 17, letterSpacing: -0.41 }}
							text={
								data?.studentInfo
									? data?.studentInfo?.group.name
									: data?.employmentInfo?.department?.name
							}
						/>
					</View>
				</View>
				{data?.studentInfo ? (
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
							text={
								data?.studentInfo
									? data?.studentInfo?.group?.flow.faculty?.toUpperCase()
									: data?.employmentInfo?.department?.name
							}
						/>
					</View>
				) : null}
				<View className='items-center mt-8'>
					<BarCodeSvg />
				</View>
			</View>
		</View>
	)
}

export default ReaderTicket
