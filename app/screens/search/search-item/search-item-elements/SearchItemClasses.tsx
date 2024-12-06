import { ProTextRegular } from '@/components'
import GroupScheduleItem from '@/screens/schedule/schedule-elements/group-schedule-item/GroupScheduleItem'
import { IEmploymentInfo } from '@/shared/types/employment-info.interface'
import { IGroup } from '@/shared/types/group.interface'
import { IRoom } from '@/shared/types/room.interface'
import { groupByDay } from '@/utils/group-by-day'
import React, { FC, MutableRefObject } from 'react'
import { View } from 'react-native'

interface ISearchItemClasses {
	group: IGroup
	teacher: IEmploymentInfo
	room: IRoom
	scheduleRefs: MutableRefObject<(View | null)[]>
}

const SearchItemClasses: FC<ISearchItemClasses> = props => {
	const { group, room, teacher, scheduleRefs } = props

	return (
		<View className='mt-3'>
			{group?.classes ? (
				group?.classes.length ? (
					groupByDay(group.classes).map(([keyItem, lessons], idx) => (
						<GroupScheduleItem
							key={keyItem}
							keyItem={keyItem}
							lessons={lessons}
							idx={idx}
							scheduleRefs={scheduleRefs}
						/>
					))
				) : (
					<ProTextRegular
						text='Пары в системе планирования расписаний для этой группы не найдены 🤔'
						style={{ letterSpacing: -0.08, lineHeight: 18 }}
						className='text-center text-light-graphics-gray px-4'
					/>
				)
			) : (
				<>
					{(teacher ? teacher : room)?.classes?.length > 0 ? (
						groupByDay((teacher ? teacher : room).classes).map(
							([keyItem, lessons], idx) => (
								<GroupScheduleItem
									key={keyItem}
									keyItem={keyItem}
									lessons={lessons}
									idx={idx}
									scheduleRefs={scheduleRefs}
									isHasTextGroup
								/>
							)
						)
					) : (
						<ProTextRegular
							text={`Пары в системе планирования расписаний ${teacher ? 'для этого преподавателя' : 'для этой аудитории'} не найдены 🤔`}
							style={{ letterSpacing: -0.08, lineHeight: 20 }}
							className='text-center text-light-graphics-gray px-4'
						/>
					)}
				</>
			)}
		</View>
	)
}

export default SearchItemClasses
