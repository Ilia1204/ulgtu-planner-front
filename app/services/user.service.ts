import { axiosWithAuth } from '@/api/interceptors'
import type {
	IFullUser,
	IUser,
	TypeUserForm
} from '@/shared/types/user.interface'

class UserService {
	private BASE_URL = '/users/profile'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<IUser[]>('/users', {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getProfile() {
		const response = await axiosWithAuth.get<IFullUser>(this.BASE_URL)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<IUser>(`/users/${id}`)
		return response.data
	}

	async updateProfile(data: TypeUserForm) {
		const response = await axiosWithAuth.put<IUser>(this.BASE_URL, data)
		return response.data
	}

	async toggleFavorites(productId: string) {
		const response = await axiosWithAuth.patch<IUser>(
			`${this.BASE_URL}/favorites/${productId}`
		)
		return response.data
	}

	async update(id: string, data: TypeUserForm) {
		const response = await axiosWithAuth.put<IUser>(`/users/${id}`, data)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<IUser>(`/users/${id}`)
		return response.data
	}

	async deleteAllFavorites() {
		const response = await axiosWithAuth.delete<IUser>(
			`${this.BASE_URL}/favorites`
		)
		return response.data
	}
}

export const userService = new UserService()
