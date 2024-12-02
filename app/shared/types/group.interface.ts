import { IClass } from './class.interface'
import type { IFlow } from './flow.interface'
import type { IBase } from './root.interface'
import type { IStudentInfo } from './student-info.interface'
import { ISubgroup } from './subgroup.interface'

export interface IGroup extends IBase {
	name: string
	description: string

	studyStartDate: string
	studyEndDate: string
	studyForm: EnumStudyForm
	educationLevel: EnumEducationLevel
	faculty: string
	specialty: string
	courseNumber: number

	flow: IFlow

	classes: IClass[]
	studentInfo: IStudentInfo[]
	subgroups: ISubgroup[]
}

export type TypeGroupForm = Omit<IGroup, 'id'> & {}

export interface IFullGroup extends IGroup {}

export enum EnumStudyForm {
	full_time = 'очная',
	part_time = 'очно-заочная',
	extramural = 'заочная',
	distance = 'дистанционная',
	mixed = 'смешанная',
	externship = 'экстернатная'
}

export const studyFormTranslations: Record<string, string> = {
	full_time: EnumStudyForm.full_time,
	part_time: EnumStudyForm.part_time,
	extramural: EnumStudyForm.extramural,
	mixed: EnumStudyForm.mixed,
	externship: EnumStudyForm.externship
}

export const getStudyFormTranslation = (studyForm: string) => {
	return studyFormTranslations[studyForm] || 'Неизвестная форма обучения'
}

export enum EnumEducationLevel {
	bachelor = 'Бакалавриат',
	master = 'Магистратура',
	postgraduate = 'Аспирантура',
	doctorate = 'Докторантура',
	specialty = 'Специалитет'
}

export const educationLevelTranslations: Record<string, string> = {
	bachelor: EnumEducationLevel.bachelor,
	master: EnumEducationLevel.master,
	postgraduate: EnumEducationLevel.postgraduate,
	doctorate: EnumEducationLevel.doctorate,
	specialty: EnumEducationLevel.specialty
}

export const getEducationLevelTranslation = (educationLevel: string) => {
	return educationLevelTranslations[educationLevel] || 'Уровень образования'
}
