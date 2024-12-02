import { axiosWithAuth } from '@/api/interceptors'
import { SearchResults } from '@/screens/search/hooks/useSearch'
import type { IGroup, TypeGroupForm } from '@/shared/types/group.interface'

class GroupService {
	private BASE_URL = '/groups'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<SearchResults[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IGroup>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async getByUser() {
		const response = await axiosWithAuth.get<IGroup[]>(
			`${this.BASE_URL}/by-user`
		)
		return response.data
	}

	async update(id: string, data: TypeGroupForm) {
		const response = await axiosWithAuth.put<IGroup>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IGroup>(
			`${this.BASE_URL}/${id}`
		)
		return response.data
	}
}

export const groupService = new GroupService()
