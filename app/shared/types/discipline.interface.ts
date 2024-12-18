import { IClass } from './class.interface'
import { IDepartment } from './department.interface'
import { IEmploymentInfo } from './employment-info.interface'
import { IFinalTest } from './final-test.interface'
import type { IBase } from './root.interface'

export interface IDiscipline extends IBase {
	name: string
	department: IDepartment

	teachers: IEmploymentInfo[]
	finalTests: IFinalTest[]
	classes: IClass[]
}

export interface IFullDiscipline extends IDiscipline {}
