import { IClass } from './class.interface'
import { IDepartment } from './department.interface'
import { IGroup } from './group.interface'
import type { IBase } from './root.interface'
import { ISemester } from './semester.interface'

export interface IFlow extends IBase {
	name: string
	faculty: string

	department: IDepartment

	groups: IGroup[]
	classes: IClass[]
	semesters: ISemester[]
}

export type TypeFlowForm = Omit<IFlow, 'id'> & {}
