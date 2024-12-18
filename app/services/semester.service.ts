import { axiosWithAuth } from '@/api/interceptors'
import type {
	ISemester,
	TypeSemesterForm
} from '@/shared/types/semester.interface'

class SemesterService {
	private BASE_URL = '/semesters'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<ISemester[]>('/semesters', {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<ISemester>(`/semesters/${id}`)
		return response.data
	}

	async getByUser() {
		const response = await axiosWithAuth.get<ISemester[]>(
			`${this.BASE_URL}/by-user`
		)
		return response.data
	}

	async update(id: string, data: TypeSemesterForm) {
		const response = await axiosWithAuth.put<ISemester>(
			`/semesters/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<ISemester>(`/semesters/${id}`)
		return response.data
	}
}

export const semesterService = new SemesterService()
