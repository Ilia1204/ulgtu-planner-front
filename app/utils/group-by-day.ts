import { IClass } from '@/shared/types/class.interface'
import { dayWeekTranslation } from '@/shared/types/schedule.interface'
import dayjs from 'dayjs'

export const groupByDay = (classes: IClass[]) => {
	return Object.entries(
		classes.reduce(
			(acc, lesson) => {
				const key = `${dayWeekTranslation(lesson.schedule.dayWeek).toUpperCase()}, ${dayjs(lesson.schedule.date).format('D MMMM').toUpperCase()}`
				if (!acc[key]) acc[key] = []
				acc[key].push(lesson)
				return acc
			},
			{} as Record<string, typeof classes>
		)
	)
}
