import { IClass } from '@/shared/types/class.interface'
import { dayWeekTranslation } from '@/shared/types/schedule.interface'
import { shortenName } from '@/utils/shorten-name'
import dayjs from 'dayjs'
import { getLessonTimes } from '../../utils/schedule-times'

export const getLessonInfo = (lesson: IClass) => {
	const uniquePairNumbers = [...new Set(lesson.pairNumbers)]

	return uniquePairNumbers.map(pairNumber => {
		const times = getLessonTimes(pairNumber)
		return {
			text:
				lesson.schedule?.dayWeek && times.start
					? `${dayWeekTranslation(lesson.schedule.dayWeek)}, ${dayjs(lesson.schedule.date).format('D MMMM')}, ${times.start} - ${times.end}`
					: 'Данные отсутствуют',
			room: {
				text: lesson.room?.name
					? `Ауд. ${lesson.room.name}, ${lesson.room.address}`
					: 'Аудитория не указана',
				path: lesson.room?.id || ''
			},
			teacher: {
				text: lesson.teacher?.user
					? `${lesson.teacher.position || ''} ${shortenName(lesson.teacher.user.fullName)}`
					: 'Преподаватели кафедры',
				path: lesson.teacher?.id || ''
			}
		}
	})
}
