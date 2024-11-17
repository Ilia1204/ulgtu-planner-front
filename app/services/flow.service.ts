import { axiosWithAuth } from '@/api/interceptors'
import type { IFlow, TypeFlowForm } from '@/shared/types/flow.interface'

class FlowService {
	private BASE_URL = '/flows'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<IFlow[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IFlow>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async update(id: string, data: TypeFlowForm) {
		const response = await axiosWithAuth.put<IFlow>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IFlow>(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const flowService = new FlowService()
