import { axiosWithAuth } from '@/api/interceptors'
import { SearchResults } from '@/screens/search/hooks/useSearch'
import {
	IEmploymentInfo,
	TypeEmploymentInfoForm
} from '@/shared/types/employment-info.interface'

class EmploymentInfoService {
	private BASE_URL = '/employment-info'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<SearchResults[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IEmploymentInfo>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}

	async getByUser() {
		const response = await axiosWithAuth.get<IEmploymentInfo[]>(
			`${this.BASE_URL}/by-user`
		)
		return response.data
	}

	async update(id: string, data: TypeEmploymentInfoForm) {
		const response = await axiosWithAuth.put<IEmploymentInfo>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IEmploymentInfo>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const employmentInfoService = new EmploymentInfoService()
