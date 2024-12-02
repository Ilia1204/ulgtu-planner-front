import { errorCatch } from '@/api/error'
import { noteService } from '@/services/note.service'
import { INote, TypeNoteForm } from '@/shared/types/note.interface'
import { showToast } from '@/utils/show-toast'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { SubmitHandler } from 'react-hook-form'

export const useNote = (
	setIsVisible?: Dispatch<SetStateAction<boolean>>,
	noteId?: string
) => {
	const queryClient = useQueryClient()

	const { data: note, isFetching } = useQuery({
		queryKey: ['get note by id', noteId],
		queryFn: () => noteService.getById(noteId || ''),
		enabled: !!noteId,
		initialData: {} as INote
	})

	const { mutate: deleteNote } = useMutation({
		mutationKey: ['delete note by user'],
		mutationFn: (noteId: string) => noteService.delete(noteId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get lesson by id'] })
			queryClient.invalidateQueries({ queryKey: ['get schedules by user'] })
		},
		onError: error => {
			showToast('Ошибка удаления заметки', 'error', errorCatch(error))
		}
	})

	const { mutate: createNote, isPending } = useMutation({
		mutationKey: ['create note'],
		mutationFn: (data: TypeNoteForm) => noteService.create(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get lesson by id'] })
			queryClient.invalidateQueries({ queryKey: ['get schedules by user'] })
			setTimeout(() => {
				showToast('Заметка успешно создана', 'success')
			}, 500)
			setIsVisible?.(false)
		},
		onError: error => {
			setTimeout(() => {
				showToast('Ошибка создания заметки: ', 'error', errorCatch(error))
			}, 500)
			setIsVisible?.(false)
		}
	})

	const { mutate: deleteAllNotes } = useMutation({
		mutationKey: ['delete all notes by user'],
		mutationFn: (classId: string) => noteService.deleteAllByUser(classId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get lesson by id'] })
			queryClient.invalidateQueries({ queryKey: ['get schedules by user'] })
			setTimeout(() => {
				showToast('Все заметки удалены', 'success')
			}, 500)
		},
		onError: error => {
			showToast('Ошибка удаления заметок', 'error', errorCatch(error))
		}
	})

	const onSubmit: SubmitHandler<TypeNoteForm> = async data => {
		await createNote(data)
	}

	return { onSubmit, isPending, note, deleteNote, deleteAllNotes }
}
