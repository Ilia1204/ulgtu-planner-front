import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth-token.services'
import { authService } from '@/services/auth.service'
import axios, { type CreateAxiosDefaults } from 'axios'
import { errorCatch } from './error'

export const SERVER_URL_DEV = 'http://localhost:4200'
export const SERVER_URL_EXTRA = 'https://9ff3-176-116-137-213.ngrok-free.app'

const options: CreateAxiosDefaults = {
	baseURL: `${SERVER_URL_EXTRA}/api`,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(async config => {
	const accessToken = await getAccessToken()

	if (config?.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

axiosWithAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth }
