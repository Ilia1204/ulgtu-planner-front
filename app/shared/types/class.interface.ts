import type { IDiscipline } from './discipline.interface'
import { IEmploymentInfo } from './employment-info.interface'
import { IFlow } from './flow.interface'
import { IRoom } from './room.interface'
import type { IBase } from './root.interface'
import { ISchedule } from './schedule.interface'

export interface IClass extends IBase {
	startTime: string
	endTime: string
	subgroup: string
	type: EnumClassType

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
	lab = 'Лабораторная',
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
