import { IClass } from './class.interface'
import type { IDepartment } from './department.interface'
import type { IDiscipline } from './discipline.interface'
import { IFinalTest } from './final-test.interface'
import type { IBase } from './root.interface'
import type { IUser } from './user.interface'

export interface IEmploymentInfo extends IBase {
	description: string
	position: string
	education: string
	academicTitles: string[]
	academicDegrees: string[]

	workExperience: number
	startDate: string
	endDate: string

	user: IUser
	department: IDepartment

	// courses: ICourse[]
	disciplines: IDiscipline[]
	classes: IClass[]
	finalTests: IFinalTest[]
}
