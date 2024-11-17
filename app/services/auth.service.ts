import { axiosClassic, axiosWithAuth } from '@/api/interceptors'
import type { IAuthForm, IAuthResponse } from '@/shared/types/auth.interface'
import {
	removeFromStorage,
	saveTokenStorage,
	saveUserStorage
} from './auth-token.services'

export const authService = {
	async initiateLogin(data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>('/auth/login', data)
		if (response.data.user) saveUserStorage(response.data)

		return response
	},

	async setPassword(data: { password: string }) {
		const response = await axiosWithAuth.post<{ password: string }>(
			'/auth/set-password',
			data
		)

		return response
	},

	async setRecoveryEmail(data: { recoveryEmail: string }) {
		const response = await axiosWithAuth.post<{ recoveryEmail: string }>(
			'/auth/set-recovery-email',
			data
		)

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/access-token'
		)
		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')
		if (response.data) removeFromStorage()

		return response
	}
}
