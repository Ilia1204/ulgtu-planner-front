import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import BackIconSvg from '../academic-semesters/BackIconSvg'
import { scheduleCalls } from './schedule-calls.data'

const ScheduleCalls: FC = () => {
	const { goBack } = useTypedNavigation()

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<Pressable className='flex-row items-center h-12 px-4' onPress={goBack}>
				<BackIconSvg />
				<ProTextRegular
					text='Профиль'
					className='text-light-graphics-blue ml-0.5'
					style={{ fontSize: 17 }}
				/>
			</Pressable>
			<View
				className='flex-row items-center p-3 px-5 border-t-[#3c3c4321]'
				style={{ borderTopWidth: 0.5 }}
			>
				<ProTextMedium
					text='РАСПИСАНИЕ ЗВОНКОВ УЛГТУ'
					className='text-light-graphics-gray'
					style={{ fontSize: 13 }}
				/>
			</View>
			<View className='bg-white'>
				{scheduleCalls.map((call, idx, array) => (
					<View className='flex-row items-center w-full ml-5' key={call.text}>
						<call.icon />
						<View
							className='w-full pr-12 ml-4 py-3'
							style={{
								borderBottomWidth: idx !== array.length - 1 ? 0.5 : 0,
								borderBottomColor: 'rgba(60, 60, 67, 0.13)'
							}}
						>
							<ProTextRegular text={call.text} className='text-base' />
						</View>
					</View>
				))}
			</View>
		</View>
	)
}

export default ScheduleCalls
