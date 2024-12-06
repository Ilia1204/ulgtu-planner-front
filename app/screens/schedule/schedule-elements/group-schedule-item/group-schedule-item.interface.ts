import { IClass } from '@/shared/types/class.interface'
import { MutableRefObject } from 'react'
import { View } from 'react-native'

export interface IGroupScheduleItem {
	lessons: IClass[]
	key: string
	idx: number
	scheduleRefs: MutableRefObject<(View | null)[]>
	keyItem: string
	isHasTextGroup?: boolean
	isHasTeacher?: boolean
	isHasTeacherGroup?: boolean
}
