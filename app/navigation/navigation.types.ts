import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	TabNavigator: undefined
	Chat: undefined
	OnBoarding: undefined
	Profile: undefined
	Schedule: undefined
	ReaderTicket: undefined
	Search: undefined
	ScheduleCalls: undefined
	ClassItem: {}
	ExamsResults: {
		semesterId: string
	}
	AcademicSemesters: undefined
	UsefulLinks: undefined
	Login: undefined
	ChangePassword: undefined
} & TypeRootStackAdminList

export type TypeRootStackAdminList = {
	Admin: undefined
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
