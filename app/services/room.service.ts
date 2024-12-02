import { axiosWithAuth } from '@/api/interceptors'
import { SearchResults } from '@/screens/search/hooks/useSearch'
import type { IRoom, TypeRoomForm } from '@/shared/types/room.interface'

class RoomService {
	private BASE_URL = '/rooms'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<SearchResults[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IRoom>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async getByUser() {
		const response = await axiosWithAuth.get<IRoom[]>(
			`${this.BASE_URL}/by-user`
		)
		return response.data
	}

	async update(id: string, data: TypeRoomForm) {
		const response = await axiosWithAuth.put<IRoom>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IRoom>(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const roomService = new RoomService()
