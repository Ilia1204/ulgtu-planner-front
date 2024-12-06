import { getCurrentDay } from '@/screens/schedule/utils/get-current-day'
import { getCurrentTime } from '@/screens/schedule/utils/get-current-time'
import { getLessonTimes } from '@/screens/schedule/utils/schedule-times'
import { IClass } from '@/shared/types/class.interface'

export const useLessonMapping = (lessons: IClass[]) => {
	return lessons
		.map(lesson => {
			const sortedPairNumbers = [...lesson.pairNumbers].sort((a, b) => a - b)
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
			const isCurrentTime = getCurrentTime(lessonTimes.start, lessonTimes.end)

			return {
				lesson,
				pairNumber,
				showTime,
				isCurrentDay,
				isCurrentTime
			}
		})
}
