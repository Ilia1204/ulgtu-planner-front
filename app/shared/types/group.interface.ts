import { IFlow } from './flow.interface'
import type { IBase } from './root.interface'
import { ISchedule } from './schedule.interface'
import type { IStudentInfo } from './student-info.interface'

export interface IGroup extends IBase {
	name: string
	description: string

	specialty: string
	profile: string

	flow: IFlow
	studentInfo: IStudentInfo[]

	schedule: ISchedule[]
}

export interface IFullGroup extends IGroup {}
