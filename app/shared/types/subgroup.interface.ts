import { IClass } from './class.interface'
import { IGroup } from './group.interface'
import type { IBase } from './root.interface'
import type { IStudentInfo } from './student-info.interface'

export interface ISubgroup extends IBase {
	name: string
	group: IGroup

	studentInfo: IStudentInfo[]
	classes: IClass[]
}

export interface IFullISubgroup extends ISubgroup {}
