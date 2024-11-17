import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { ChevronLeft } from 'lucide-react-native'
import React, { FC } from 'react'
import { Pressable, StatusBar, View } from 'react-native'
import CalendarSvg from './CalendarSvg'

const Schedule: FC = () => {
	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.tertiary }}
		>
			<StatusBar backgroundColor={COLORS.light.background.tertiary} />
			<View
				className='px-4 flex-row items-center py-2 pt-3 justify-between border-b-[#3c3c4321]'
				style={{
					borderBottomWidth: 0.5,
					backgroundColor: 'rgb(247, 247, 247)'
				}}
			>
				{/* Невидимая иконка */}
				<ChevronLeft color='#333' style={{ opacity: 0 }} />
				<ProTextSemiBold
					className='text-light-label-primary mb-1'
					text='Расписание'
					style={{ fontSize: 18, letterSpacing: -0.41 }}
				/>
				<Pressable onPress={() => {}}>
					<CalendarSvg />
				</Pressable>
			</View>
		</View>
	)
}

export default Schedule
