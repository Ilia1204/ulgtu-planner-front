import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { ChevronUp } from 'lucide-react-native'
import React, { FC, useCallback, useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'
import { getCurrentDay } from '../../utils/get-current-day'
import { getCurrentTime } from '../../utils/get-current-time'
import { getLessonTimes } from '../../utils/schedule-times'
import ScheduleItem from '../ScheduleItem'
import { IGroupScheduleItem } from './group-schedule-item.interface'

const GroupScheduleItem: FC<IGroupScheduleItem> = props => {
	const { lessons, idx, scheduleRefs, keyItem } = props
	const { navigate } = useTypedNavigation()

	const open = useSharedValue(false)

	const progress = useDerivedValue(() =>
		open.value ? withTiming(0) : withTiming(1)
	)

	const [contentHeight, setContentHeight] = useState(0)
	const heightValue = useSharedValue(-1)

	const handleLayout = (event: any) => {
		const { height } = event.nativeEvent.layout
		if (height !== contentHeight) {
			setContentHeight(height)
			if (height > 0 && heightValue.value === -1) {
				heightValue.value = height
			}
		}
	}

	const handlePress = useCallback(() => {
		open.value = !open.value

		heightValue.value = open.value
			? withTiming(contentHeight, { duration: 300 })
			: withTiming(contentHeight ? 0 : -1, { duration: 300 })
	}, [open, contentHeight])

	useEffect(() => {
		if (contentHeight > 0 && heightValue.value === -1) {
			heightValue.value = withTiming(contentHeight, { duration: 300 })
		}
	}, [contentHeight])

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: heightValue.value,
		overflow: 'hidden'
	}))

	const iconStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${progress.value * 180}deg` }]
	}))
	return (
		<View ref={ref => (scheduleRefs.current[idx] = ref)}>
			<Pressable
				className='ml-5 pr-5 -mr-1 flex-row items-center justify-between py-3.5'
				onPress={handlePress}
			>
				<ProTextMedium text={keyItem} className='text-light-graphics-gray' />
				<Animated.View style={iconStyle}>
					<ChevronUp color='#C7C7CC' size={22} />
				</Animated.View>
			</Pressable>

			<Animated.View style={heightAnimationStyle}>
				<View onLayout={handleLayout}>
					{lessons
						.map(lesson => {
							const sortedPairNumbers = [...lesson.pairNumbers].sort(
								(a, b) => a - b
							)
							return sortedPairNumbers.map(pairNumber => ({
								lesson,
								pairNumber
							}))
						})
						.flat()
						.sort((a, b) => a.pairNumber - b.pairNumber)
						.map(({ lesson, pairNumber }, lessonIndex, array) => {
							const showTime = array
								.slice(0, lessonIndex)
								.every(prevLesson => prevLesson.pairNumber !== pairNumber)
							const isCurrentDay = getCurrentDay(lesson)
							const lessonTimes = getLessonTimes(pairNumber)
							const isCurrentTime = getCurrentTime(
								lessonTimes.start,
								lessonTimes.end
							)

							return (
								<ScheduleItem
									key={`${lesson.id}-${pairNumber}`}
									lesson={lesson}
									pairNumber={pairNumber}
									showTime={showTime}
									isCurrentDay={isCurrentDay}
									isCurrentTime={isCurrentTime}
									onPress={() => navigate('LessonItem', { id: lesson.id })}
								/>
							)
						})}
				</View>
			</Animated.View>
		</View>
	)
}

export default GroupScheduleItem
