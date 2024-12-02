import type { IBase } from './root.interface'

export interface ISemester extends IBase {
	number: string
	// flow:IFlow
	// finalTests: IFinalTests[]
}

export type TypeSemesterForm = Omit<ISemester, 'id'> & {}
