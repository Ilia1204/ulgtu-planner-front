import { INote, TypeNoteForm } from '@/shared/types/note.interface'
import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

export function useInitialDataNote(
	reset: UseFormReset<TypeNoteForm>,
	note: INote,
	lessonId: string
) {
	useEffect(() => {
		if (note) {
			reset({
				content: note.content || '',
				isPrivate: note.isPrivate || true,
				classId: note.classId || lessonId,
				createdAt: note.createdAt || ''
			})
		}
	}, [note])
}
