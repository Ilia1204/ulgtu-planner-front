import { axiosWithAuth } from '@/api/interceptors'
import type { INote, TypeNoteForm } from '@/shared/types/note.interface'

class NoteService {
	private BASE_URL = '/notes'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<INote[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}

	async create(data: TypeNoteForm) {
		const response = await axiosWithAuth.post<TypeNoteForm>(this.BASE_URL, data)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosWithAuth.get<INote>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async update(id: string, data: TypeNoteForm) {
		const response = await axiosWithAuth.put<INote>(
			`${this.BASE_URL}/${id}`,
			data
		)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete<INote>(`${this.BASE_URL}/${id}`)
		return response.data
	}

	async deleteAllByUser(classId: string) {
		const response = await axiosWithAuth.delete<INote>(
			`${this.BASE_URL}/delete-all-by-user/${classId}`
		)
		return response.data
	}
}

export const noteService = new NoteService()
