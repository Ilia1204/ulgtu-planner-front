import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { IClass, getClassTypeTranslation } from '@/shared/types/class.interface'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import { getLessonTimes } from '../utils/schedule-times'
import { schedulesStyles } from '../utils/schedules.styles'

interface IScheduleItem {
	lesson: IClass
	pairNumber: number
	showTime: boolean
	isCurrentDay: boolean
	isCurrentTime: boolean
	onPress?: () => void
}

const ScheduleItem: FC<IScheduleItem> = props => {
	const { lesson, pairNumber, showTime, isCurrentDay, isCurrentTime, onPress } =
		props

	return (
		<Pressable
			key={`${lesson.discipline.name}-${pairNumber}`}
			className={`flex-row items-center gap-x-2.5 pb-3 ${isCurrentDay ? 'bg-[#EFF0F1]' : 'bg-white'} ${
				isCurrentTime && isCurrentDay ? 'bg-[#CDCECF]' : ''
			}`}
			onPress={onPress}
		>
			<View
				className='self-start items-center py-3 pt-2 mb-2'
				style={{ width: 65, opacity: showTime ? 1 : 0 }}
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
				<View className='mt-1 absolute -bottom-2'>
					<ProTextRegular
						className='text-light-graphics-gray text-xs'
						style={{ letterSpacing: -0.08 }}
						text={`(${pairNumber}-ая)`}
					/>
				</View>
			</View>
			<View style={{ ...schedulesStyles.verticalLine }} />
			<View
				className={`flex-1 pr-3.5 ${showTime ? 'pt-2.5' : 'pt-0.5'} gap-y-1.5`}
			>
				<ProTextSemiBold
					className='text-light-graphics-blue'
					style={{ letterSpacing: 0.06, fontSize: 12 }}
					text={getClassTypeTranslation(lesson.type).toUpperCase()}
				/>
				<ProTextSemiBold
					style={{ letterSpacing: -0.08 }}
					text={`${lesson.discipline.name} ${lesson?.subgroup?.name ? `- ${lesson?.subgroup?.name}` : ''}`}
					className='pr-2.5'
				/>
				<ProTextRegular
					className='text-light-graphics-gray text-xs'
					style={{ letterSpacing: -0.08 }}
					text={`Ауд. ${lesson?.room?.name}, ${lesson?.room?.address}`}
				/>
			</View>
		</Pressable>
	)
}

export default ScheduleItem
