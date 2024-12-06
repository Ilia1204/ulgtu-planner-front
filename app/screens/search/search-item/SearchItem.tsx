import { ProTextRegular } from '@/components'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { scrollToCurrentDay } from '@/utils/scroll-to-current-date'
import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react'
import { Pressable, RefreshControl, ScrollView, View } from 'react-native'
import BackIconSvg from '../../profile/profile-screens/academic-semesters/BackIconSvg'
import SkeletonProfile from '../../profile/profile-screens/useful-links/SkeletonProfile'
import SkeletonSchedule from '../../schedule/schedule-skeleton/SkeletonSchedule'
import { useGroupById } from '../hooks/useGroupById'
import { useRoomById } from '../hooks/useRoomById'
import { useTeacherById } from '../hooks/useTeacherById'
import { IGroupById } from '../search.interface'
import SearchItemClasses from './search-item-elements/SearchItemClasses'
import SearchItemHeader from './search-item-elements/SearchItemHeader'

const SearchItem: FC = () => {
	const { goBack } = useTypedNavigation()
	const { params } = useTypedRoute<'SearchItem'>()

	const scrollViewRef = useRef<ScrollView>(null)
	const scheduleRefs = useRef<Array<View | null>>([])

	const {
		group,
		isFetching: isFetchingGroup,
		refetch: refetchGroup
	} = params.type === 'group' ? useGroupById(params.id) : ({} as IGroupById)
	const {
		room,
		isFetching: isFetchingRoom,
		refetch: refetchRoom
	} = useRoomById(params.id)
	const {
		teacher,
		isFetching: isFetchingTeacher,
		refetch: refetchTeacher
	} = useTeacherById(params.id)

	const isFetching = isFetchingGroup || isFetchingRoom || isFetchingTeacher
	const refetch = refetchGroup || refetchTeacher || refetchRoom
	const classes = group?.classes || room?.classes || teacher?.classes

	const onRefresh = useCallback(() => {
		if (refetch) refetch()
	}, [refetch])

	useEffect(() => {
		if (!isFetching) {
			setTimeout(() => {
				scrollToCurrentDay(classes, scrollViewRef, scheduleRefs)
			}, 200)
		}
	}, [isFetching, classes, scrollToCurrentDay])

	const headerProps = useMemo(
		() => ({ teacher, group, room }),
		[teacher, group, room]
	)
	const classesProps = useMemo(
		() => ({ teacher, group, room, scheduleRefs }),
		[teacher, group, room, scheduleRefs]
	)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<Pressable
				className='flex-row items-center px-4 border-b-[#3c3c4321] '
				style={{ height: 50, borderBottomWidth: 0.5 }}
				onPress={goBack}
			>
				<BackIconSvg />
				<ProTextRegular
					text={params.title}
					className='text-light-graphics-blue ml-0.5'
					style={{ fontSize: 17 }}
				/>
			</Pressable>
			<ScrollView
				showsVerticalScrollIndicator={false}
				ref={scrollViewRef}
				refreshControl={
					<RefreshControl
						refreshing={isFetching}
						onRefresh={onRefresh}
						colors={[COLORS.light.graphics.blue]}
					/>
				}
			>
				{isFetching ? (
					<>
						<SkeletonProfile />
						<View className='mt-3.5' />
						<SkeletonSchedule />
					</>
				) : (
					<>
						<SearchItemHeader {...headerProps} />
						<SearchItemClasses {...classesProps} />
					</>
				)}
			</ScrollView>
		</View>
	)
}

export default SearchItem
