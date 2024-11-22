import type { IDiscipline } from './discipline.interface'
import type { IEmploymentInfo } from './employment-info.interface'
import type { IFlow } from './flow.interface'
import type { IRoom } from './room.interface'
import type { IBase } from './root.interface'
import type { ISchedule } from './schedule.interface'
import type { ISubgroup } from './subgroup.interface'

export interface IClass extends IBase {
	subgroup: ISubgroup
	type: EnumClassType
	pairNumber: number

	room: IRoom
	schedule: ISchedule
	teacher: IEmploymentInfo
	discipline: IDiscipline

	flows: IFlow[]
	// attachment: IAttachment[]
	// notes: INote[]
}

export enum EnumClassType {
	lecture = 'Лекция',
	lab = 'Лабораторные работы',
	practice = 'Практика',
	consultation = 'Консультация',
	exam = 'Экзамен'
}

export const classTypeTranslations: Record<string, string> = {
	lecture: EnumClassType.lecture,
	lab: EnumClassType.lab,
	practice: EnumClassType.practice,
	consultation: EnumClassType.consultation,
	exam: EnumClassType.exam
}

export const getClassTypeTranslation = (classType: string) => {
	return classTypeTranslations[classType] || 'Неизвестный тип занятия'
}
