import type { IDiscipline } from './discipline.interface'
import { IEmploymentInfo } from './employment-info.interface'
import { IFlow } from './flow.interface'
import { IRoom } from './room.interface'
import type { IBase } from './root.interface'
import { ISchedule } from './schedule.interface'
import { IStudentExamResult } from './student-exam-result.interface'

export interface IFinalTest extends IBase {
	date: string
	types: EnumExamType[]

	room: IRoom
	schedule: ISchedule
	teacher: IEmploymentInfo
	discipline: IDiscipline

	flows: IFlow[]
	// attachment: IAttachment[]
	// notes: INote[]
	studentExamsResults: IStudentExamResult[]
}

export enum EnumExamType {
	exam = 'Экзамен',
	credit = 'Зачёт',
	differentiated_credit = 'Дифференцированный зачёт',
	referat = 'Реферат',
	course_work = 'Курсовая работа',
	calculation_graphic_work = 'Расчётно-графическая работа'
}

export const examTypeTranslations: Record<string, string> = {
	exam: EnumExamType.exam,
	credit: EnumExamType.credit,
	differentiated_credit: EnumExamType.differentiated_credit,
	referat: EnumExamType.referat,
	course_work: EnumExamType.course_work,
	calculation_graphic_work: EnumExamType.calculation_graphic_work
}

export const examTypeTranslation = (examType: string) => {
	return examTypeTranslations[examType] || 'Неизвестный тип экзамена'
}
