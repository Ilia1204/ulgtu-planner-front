import { IClass } from '@/shared/types/class.interface'
import dayjs from 'dayjs'

const currentDate = dayjs().startOf('day')

export const getCurrentDay = (lesson: IClass) => {
	const isCurrentDay = dayjs(lesson.schedule.date).isSame(currentDate, 'day')

	return isCurrentDay
}
