import { INote } from '@/shared/types/note.interface'
import { Dispatch, SetStateAction } from 'react'
import { UseFormHandleSubmit, SubmitHandler, Control } from 'react-hook-form'

export interface IModalCreateNote {
	isVisible: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
	handleSubmit: UseFormHandleSubmit<Omit<INote, 'id'>, undefined>
	onSubmit: SubmitHandler<Omit<INote, 'id'>>
	control: Control<Omit<INote, 'id'>, any>
}
