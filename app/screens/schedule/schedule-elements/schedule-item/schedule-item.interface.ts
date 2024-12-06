import { IClass } from '@/shared/types/class.interface'

export interface IScheduleItem {
	lesson: IClass
	pairNumber: number
	showTime: boolean
	isCurrentDay: boolean
	isCurrentTime: boolean
	onPress?: () => void
	isHasTextGroup?: boolean
	isHasTeacher?: boolean
	isHasTeacherGroup?: boolean
}
