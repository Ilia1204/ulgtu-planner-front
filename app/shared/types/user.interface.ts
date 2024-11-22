import type { IBase } from './root.interface'
import type { IStudentInfo } from './student-info.interface'

export interface IUser extends IBase {
	email: string
	recoveryEmail: string

	fullName: string
	username: string
	avatarPath: string
	password: string
	phoneNumber: string

	cardInfo: ICardInfo

	libraryCardNumber: string
	birthDate: string
	roles: EnumUserRole[]

	studentInfo: IStudentInfo

	pushToken?: string
}

interface ICardInfo extends IBase {
	cardNumber: string
	issuedAt: string
	barCode: string
	validUntil: string
}

export interface IFullUser extends IUser {}

export enum EnumUserRole {
	student = 'Студент',
	teacher = 'Преподаватель',
	course_creator = 'Создатель курса',
	assistant = 'Ассистент',
	admin = 'Администратор'
}

export const userRolesTranslations: Record<string, string> = {
	student: EnumUserRole.student,
	teacher: EnumUserRole.teacher,
	course_creator: EnumUserRole.course_creator,
	assistant: EnumUserRole.assistant,
	admin: EnumUserRole.admin
}

export const getUserRoleTranslation = (userRole: string) => {
	return userRolesTranslations[userRole] || 'Неизвестная роль'
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
