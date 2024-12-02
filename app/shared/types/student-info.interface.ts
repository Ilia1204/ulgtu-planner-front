import { IGroup } from './group.interface'
import type { IBase } from './root.interface'
import { ISubgroup } from './subgroup.interface'

export interface IStudentInfo extends IBase {
	creditCardNumber: string
	subgroup: ISubgroup
	group: IGroup
}
