import { ProTextRegular } from '@/components'
import MainHeader from '@/components/ui/headers/MainHeader'
import { COLORS } from '@/constants/colors.constants'
import { groupByDay } from '@/utils/group-by-day'
import { scrollToCurrentDay } from '@/utils/scroll-to-current-date'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { RefreshControl, ScrollView, StatusBar, View } from 'react-native'
import CalendarSvg from './CalendarSvg'
import { useClassesByUser } from './hooks/useClassesByUser'
import Stories from './schedule-elements/Stories'
import GroupScheduleItem from './schedule-elements/group-schedule-item/GroupScheduleItem'
import SkeletonSchedule from './schedule-skeleton/SkeletonSchedule'

const Schedule: FC = () => {
	const [isVisible, setIsVisible] = useState(false)
	const scrollViewRef = useRef<ScrollView>(null)
	const scheduleRefs = useRef<Array<View | null>>([])

	const { classes, isFetching, refetch } = useClassesByUser()

	const onRefresh = useCallback(() => {
		refetch()
	}, [refetch])

	useEffect(() => {
		if (!isFetching) {
			setTimeout(() => {
				scrollToCurrentDay(classes, scrollViewRef, scheduleRefs)
			}, 100)
		}
	}, [isFetching, classes, scrollToCurrentDay])

	return (
		<View
			className='h-full flex-1'
			style={{ backgroundColor: COLORS.light.background.tertiary }}
		>
			<StatusBar
				backgroundColor={!isVisible ? COLORS.light.background.tertiary : '#fff'}
				barStyle='dark-content'
			/>
			<MainHeader
				title='Расписание'
				icon={CalendarSvg}
				onPressIcon={() => setIsVisible(true)}
			/>
			{/* <ModalCalendar isVisible={isVisible} setIsVisible={setIsVisible} /> */}
			<ScrollView
				showsVerticalScrollIndicator={false}
				ref={scrollViewRef}
				className='flex-1 h-full'
				refreshControl={
					<RefreshControl
						refreshing={isFetching}
						onRefresh={onRefresh}
						colors={[COLORS.light.graphics.blue]}
					/>
				}
			>
				<Stories />
				<View className='mt-3.5'>
					{isFetching ? (
						<SkeletonSchedule />
					) : classes?.length && classes?.length > 0 ? (
						groupByDay(classes).map(([keyItem, lessons], idx) => (
							<GroupScheduleItem
								key={keyItem}
								keyItem={keyItem}
								lessons={lessons}
								idx={idx}
								scheduleRefs={scheduleRefs}
								isHasTeacher={false}
								isHasTeacherGroup
								isHasTextGroup
							/>
						))
					) : (
						<ProTextRegular
							text='Пары в системе планирования расписаний для этой группы не найдены 🤔'
							style={{ letterSpacing: -0.08, lineHeight: 20 }}
							className='text-center text-light-graphics-gray px-4'
						/>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default Schedule
