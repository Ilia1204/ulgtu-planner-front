import { axiosWithAuth } from '@/api/interceptors'
import type {
	IStudentExamResult,
	TypeStudentExamResult
} from '@/shared/types/student-exam-result.interface'

class StudentExamsResultsService {
	private BASE_URL = '/student-exams-results'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<IStudentExamResult[]>(
			this.BASE_URL,
			{
				params: searchTerm ? { searchTerm } : {}
			}
		)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IStudentExamResult>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}

	async getBySemesterId(id: string) {
		const response = await axiosWithAuth.get<IStudentExamResult[]>(
			`${this.BASE_URL}/by-semester/${id}`
		)
		return response.data
	}

	async update(id: string, data: TypeStudentExamResult) {
		const response = await axiosWithAuth.put<IStudentExamResult>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IStudentExamResult>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const studentExamsResultsService = new StudentExamsResultsService()
