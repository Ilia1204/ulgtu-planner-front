import { IClass } from './class.interface'
import { IGroup } from './group.interface'
import type { IBase } from './root.interface'

export interface ISchedule extends IBase {
	dayWeek: EnumDayWeek
	weekType: EnumWeekType
	date: string

	group: IGroup
	classes: IClass[]
}

export type TypeScheduleForm = Omit<ISchedule, 'id'> & {}

export enum EnumDayWeek {
	monday = 'Понедельник',
	tuesday = 'Вторник',
	wednesday = 'Среда',
	thursday = 'Четверг',
	friday = 'Пятница',
	saturday = 'Суббота',
	sunday = 'Воскресенье'
}

export const dayWeekTranslations: Record<string, string> = {
	monday: EnumDayWeek.monday,
	tuesday: EnumDayWeek.tuesday,
	wednesday: EnumDayWeek.wednesday,
	thursday: EnumDayWeek.thursday,
	friday: EnumDayWeek.friday,
	saturday: EnumDayWeek.saturday,
	sunday: EnumDayWeek.sunday
}

export const dayWeekTranslation = (dayWeek: string) => {
	return dayWeekTranslations[dayWeek] || 'Неизвестный тип дня'
}

export enum EnumWeekType {
	odd = 'Нечётная',
	even = 'Чётная'
}

export const weekTypeTranslations: Record<string, string> = {
	odd: EnumWeekType.odd,
	even: EnumWeekType.even
}

export const weekTypeTranslation = (weekType: string) => {
	return weekTypeTranslations[weekType] || 'Неизвестный тип недели'
}
