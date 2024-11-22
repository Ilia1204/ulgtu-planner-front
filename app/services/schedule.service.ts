import { axiosWithAuth } from '@/api/interceptors'
import type {
	ISchedule,
	TypeScheduleForm
} from '@/shared/types/schedule.interface'

class ScheduleService {
	private BASE_URL = '/schedules'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<ISchedule[]>('/schedules', {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<ISchedule>(`/schedules/${id}`)
		return response.data
	}

	async getSchedulesForStudent() {
		const response = await axiosWithAuth.get<ISchedule[]>(
			`schedules/get-schedule-for-student`
		)
		return response.data
	}

	async getByUser() {
		const response = await axiosWithAuth.get<ISchedule[]>(
			`${this.BASE_URL}/by-user`
		)
		return response.data
	}

	async updateProfile(data: TypeScheduleForm) {
		const response = await axiosWithAuth.put<ISchedule>(this.BASE_URL, data)
		return response.data
	}

	async toggleFavorites(productId: string) {
		const response = await axiosWithAuth.patch<ISchedule>(
			`${this.BASE_URL}/favorites/${productId}`
		)
		return response.data
	}

	async update(id: string, data: TypeScheduleForm) {
		const response = await axiosWithAuth.put<ISchedule>(
			`/schedules/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<ISchedule>(`/schedules/${id}`)
		return response.data
	}

	async deleteAllFavorites() {
		const response = await axiosWithAuth.delete<ISchedule>(
			`${this.BASE_URL}/favorites`
		)
		return response.data
	}
}

export const scheduleService = new ScheduleService()
