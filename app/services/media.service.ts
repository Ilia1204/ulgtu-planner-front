import { SERVER_URL_EXTRA, axiosWithAuth } from '@/api/interceptors'

export interface IFileResponse {
	_id: number
	path: string
	name: string
	size: string
}

export interface IFileResponseData {
	data: IFileResponse[]
	status: string
	message: string
}

export const MediaService = {
	async upload(file: FormData, folder?: string) {
		const config = {
			url: '/api/files',
			method: 'POST',
			data: file,
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' }
		}

		const response = await axiosWithAuth.post<IFileResponseData>(
			`${SERVER_URL_EXTRA}/api/files`,
			file,
			config
		)

		return response.data
	}
}
