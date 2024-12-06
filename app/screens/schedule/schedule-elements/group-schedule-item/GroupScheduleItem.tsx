import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { useAnimatedCollapse } from '@/hooks/useAnimatedCollapse'
import { useLessonMapping } from '@/hooks/useLessonMapping'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { ChevronUp } from 'lucide-react-native'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import Animated from 'react-native-reanimated'
import ScheduleItem from '../schedule-item/ScheduleItem'
import { IGroupScheduleItem } from './group-schedule-item.interface'

const GroupScheduleItem: FC<IGroupScheduleItem> = props => {
	const {
		lessons,
		idx,
		scheduleRefs,
		keyItem,
		isHasTextGroup = false,
		isHasTeacher = true,
		isHasTeacherGroup = false
	} = props

	const { navigate } = useTypedNavigation()
	const {
		listRef,
		handleLayout,
		handlePress,
		heightAnimationStyle,
		iconStyle
	} = useAnimatedCollapse()

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
			<Animated.View style={heightAnimationStyle} ref={listRef}>
				<View onLayout={handleLayout}>
					{useLessonMapping(lessons).map(
						({ lesson, pairNumber, showTime, isCurrentDay, isCurrentTime }) => (
							<ScheduleItem
								key={`${lesson.id}-${pairNumber}`}
								lesson={lesson}
								pairNumber={pairNumber}
								showTime={showTime}
								isCurrentDay={isCurrentDay}
								isCurrentTime={isCurrentTime}
								onPress={
									!isHasTeacher
										? () => navigate('LessonItem', { id: lesson.id })
										: () => {}
								}
								isHasTextGroup={isHasTextGroup}
								isHasTeacher={isHasTeacher}
								isHasTeacherGroup={isHasTeacherGroup}
							/>
						)
					)}
				</View>
			</Animated.View>
		</View>
	)
}

export default GroupScheduleItem
