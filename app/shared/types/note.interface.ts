import { IClass } from './class.interface'
import type { IBase } from './root.interface'
import { IUser } from './user.interface'

export interface INote extends IBase {
	content: string
	isPrivate: boolean
	fromTeacher: boolean
	classId: string
	class: IClass
	user: IUser
	userId: string
}

export type TypeNoteForm = Omit<INote, 'id'> & {}
