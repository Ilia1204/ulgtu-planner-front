import type { IBase } from './root.interface'
import { IUser } from './user.interface'

export interface ISemester extends IBase {
	number: string
	// flow:IFlow
	// finalTests: IFinalTests[]
}

export type TypeSemesterForm = Omit<IUser, 'id'> & {}
