import type { IClass } from '@/shared/types/class.interface'
import dayjs from 'dayjs'
import { getCurrentTime } from '../Schedule'
import { getLessonTimes } from './schedule-times'

export const processLesson = (lesson: IClass) => {
	const sortedPairNumbers = [...lesson.pairNumbers].sort((a, b) => a - b)

	const lessonWithPairNumbers = sortedPairNumbers.map(pairNumber => ({
		lesson,
		pairNumber
	}))

	return lessonWithPairNumbers
		.flat()
		.sort((a, b) => a.pairNumber - b.pairNumber)
}

export const shouldShowTime = (
	lessonIndex: number,
	pairNumber: number,
	array: {
		lesson: IClass
		pairNumber: number
	}[]
) => {
	return array
		.slice(0, lessonIndex)
		.every(prevLesson => prevLesson.pairNumber !== pairNumber)
}

export const isCurrentLesson = (lesson: any, currentDate: dayjs.Dayjs) => {
	const lessonTimes = getLessonTimes(lesson.pairNumber)
	const isCurrentDay = dayjs(lesson.schedule.date).isSame(currentDate, 'day')
	const isCurrentTime = getCurrentTime(lessonTimes?.start, lessonTimes?.end)

	return { isCurrentDay, isCurrentTime }
}
