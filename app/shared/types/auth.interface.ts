import type { IUser } from './user.interface'

export interface IAuthForm {
	email?: string
	username?: string
	creditCardNumber?: string
}

export interface IAuthResponse {
	user: IUser
	name: string
	accessToken: string
}
