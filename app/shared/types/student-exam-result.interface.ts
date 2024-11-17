import { IFinalTest } from './final-test.interface'
import type { IBase } from './root.interface'
import { IStudentInfo } from './student-info.interface'

export interface IStudentExamResult extends IBase {
	result: EnumExamResult
	type: EnumExamType

	student: IStudentInfo
	finalTest: IFinalTest
}

export type TypeStudentExamResult = Omit<IStudentExamResult, 'id'> & {}

export enum EnumExamResult {
	excellent = 'Отлично',
	good = 'Хорошо',
	satisfactory = 'Удовлетворительно',
	fail = 'Неудовлетворительно',
	credited = 'Зачтено',
	not_credited = 'Не зачтено',
	absense = 'Неявка'
}

export const examResultTranslations: Record<string, string> = {
	excellent: EnumExamResult.excellent,
	good: EnumExamResult.good,
	satisfactory: EnumExamResult.satisfactory,
	fail: EnumExamResult.fail,
	credited: EnumExamResult.credited,
	not_credited: EnumExamResult.not_credited,
	absense: EnumExamResult.absense
}

export const examResultTranslation = (examResult: string) => {
	return examResultTranslations[examResult] || 'Неизвестный тип оценки'
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
