import type { IBase } from './root.interface'
import { ISubgroup } from './subgroup.interface'

export interface IStudentInfo extends IBase {
	creditCardNumber: string
	studyStartDate: string
	studyEndDate: string
	studyForm: EnumStudyForm
	faculty: string
	specialty: string
	profile: string
	course: number
	educationLevel: EnumEducationLevel
	fundingSource: EnumFundingSource
	academicDebt: number
	subgroup: ISubgroup
}

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

export enum EnumFundingSource {
	budget = 'бюджетная основа',
	paid = 'платная основа',
	targeted_training = 'целевая основа',
	grant = 'грантовая основа',
	scholarship = 'стипендиальная основа'
}

export const fundingSourceTranslations: Record<string, string> = {
	budget: EnumFundingSource.budget,
	paid: EnumFundingSource.paid,
	targeted_training: EnumFundingSource.targeted_training,
	grant: EnumFundingSource.grant,
	scholarship: EnumFundingSource.scholarship
}

export const getFundingSourceTranslation = (fundingSource: string) => {
	return (
		educationLevelTranslations[fundingSource] ||
		'Неизвестный источник финансирования'
	)
}
