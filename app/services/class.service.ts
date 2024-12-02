import { axiosWithAuth } from '@/api/interceptors'
import type { IClass, TypeClassForm } from '@/shared/types/class.interface'

class ClassService {
	private BASE_URL = '/classes'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<IClass[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IClass>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async update(id: string, data: TypeClassForm) {
		const response = await axiosWithAuth.put<IClass>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IClass>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const classService = new ClassService()
