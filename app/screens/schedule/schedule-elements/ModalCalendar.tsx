import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { X } from 'lucide-react-native'
import React, { FC, useState } from 'react'
import { Modal, Pressable, View } from 'react-native'
import { CalendarList } from 'react-native-calendars'

interface IModalCalendar {
	isVisible: boolean
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCalendar: FC<IModalCalendar> = ({ isVisible, setIsVisible }) => {
	const [selectedDate, setSelectedDate] = useState('')

	return (
		<Modal visible={isVisible} animationType='slide' transparent>
			<View className='flex-1 justify-center items-center mt-5 bg-[rgba(0,0,0,0.5)]'>
				<View className='bg-white rounded-xl'>
					<View className='flex-row items-center justify-between p-5 mt-7'>
						<ProTextSemiBold
							style={{ fontSize: 18 }}
							className='text-center'
							text='Календарь'
						/>
						<Pressable
							onPress={() => setIsVisible(false)}
							className='items-center'
						>
							<X color='#000' />
						</Pressable>
					</View>
					<CalendarList
						markingType='multi-period'
						onDayPress={day => {
							setSelectedDate(day.dateString)
							setIsVisible(false)
						}}
						markedDates={{
							[selectedDate]: {
								selected: true,
								selectedColor: '#FF3B30',
								selectedTextColor: '#fff'
							}
						}}
						theme={{
							textMonthFontSize: 20,
							textMonthFontFamily: 'pro-text-semi-bold',
							textDayFontSize: 16,
							textDayHeaderFontFamily: 'pro-text-semi-bold',
							dayTextColor: '#000',
							arrowColor: '#007aff',
							todayTextColor: '#007aff',
							textDayFontFamily: 'pro-text-semi-bold'
						}}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default ModalCalendar
