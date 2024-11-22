import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { Linking, Pressable, View } from 'react-native'
import ArrowRightSvg from '../../profile-svg/common/ArrowRight'
import BackIconSvg from '../academic-semesters/BackIconSvg'
import { usefulLinks } from './useful-links.data'

const UsefulLinks: FC = () => {
	const { goBack } = useNavigation()

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<View
				className='flex-row items-center h-12 px-2 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5 }}
			>
				<Pressable
					className='flex-row items-center absolute left-2.5'
					onPress={goBack}
				>
					<BackIconSvg />
					<ProTextRegular
						text='Профиль'
						className='text-light-graphics-blue'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<View className='flex-1 items-center ml-1'>
					<ProTextBold text='Полезные ссылки' style={{ fontSize: 17 }} />
				</View>
			</View>
			<View className='flex-row items-center p-3 px-5'>
				<ProTextMedium
					text='СОЦИАЛЬНЫЕ СЕТИ'
					className='text-light-graphics-gray'
					style={{ fontSize: 13 }}
				/>
			</View>
			<View className='bg-white px-5'>
				{usefulLinks.slice(0, 2).map((link, idx, array) => (
					<Pressable
						className='flex-row items-center w-full'
						key={link.text}
						onPress={() => Linking.openURL(link.url)}
					>
						<link.icon />
						<View
							className='flex-row items-center justify-between w-full pr-12 ml-4 py-3'
							style={{
								borderBottomWidth: idx !== array.length - 1 ? 0.5 : 0,
								borderBottomColor: 'rgba(60, 60, 67, 0.13)'
							}}
						>
							<ProTextRegular text={link.text} className='text-base' />
							<ArrowRightSvg />
						</View>
					</Pressable>
				))}
			</View>
			<View className='flex-row items-center p-3 px-5'>
				<ProTextMedium
					text='СЕРВИСЫ УНИВЕРСИТЕТА'
					className='text-light-graphics-gray'
					style={{ fontSize: 13 }}
				/>
			</View>
			<View className='bg-white px-5'>
				{usefulLinks.slice(2, 4).map((link, idx, array) => (
					<Pressable
						className='flex-row items-center w-full'
						key={link.text}
						onPress={() => Linking.openURL(link.url)}
					>
						<link.icon />
						<View
							className='flex-row items-center justify-between w-full pr-12 ml-4 py-3'
							style={{
								borderBottomWidth: idx !== array.length - 1 ? 0.5 : 0,
								borderBottomColor: 'rgba(60, 60, 67, 0.13)'
							}}
						>
							<ProTextRegular text={link.text} className='text-base' />
							<ArrowRightSvg />
						</View>
					</Pressable>
				))}
			</View>
		</View>
	)
}

export default UsefulLinks
