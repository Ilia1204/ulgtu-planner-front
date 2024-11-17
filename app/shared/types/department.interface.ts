import { IDiscipline } from './discipline.interface'
import { IEmploymentInfo } from './employment-info.interface'
import { IFlow } from './flow.interface'
import type { IBase } from './root.interface'

export interface IDepartment extends IBase {
	name: string
	description: string

	flows: IFlow[]
	disciplines: IDiscipline[]
	teachers: IEmploymentInfo[]
}

export interface IFullDepartment extends IDepartment {}
