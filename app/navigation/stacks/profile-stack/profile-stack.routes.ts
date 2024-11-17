import { IRoute } from '@/navigation/navigation.types'
import { Profile } from '@/screens'
import AcademicSemesters from '@/screens/profile/profile-screens/academic-semesters/AcademicSemesters'
import ExamsResults from '@/screens/profile/profile-screens/academic-semesters/exams-results/ExamsResults'
import ChangePassword from '@/screens/profile/profile-screens/change-password/ChangePassword'
import ReaderTicket from '@/screens/profile/profile-screens/reader-ticket/ReaderTicket'
import ScheduleCalls from '@/screens/profile/profile-screens/schedule-calls/ScheduleCalls'
import UsefulLinks from '@/screens/profile/profile-screens/useful-links/UsefulLinks'

export const profileStackRoutes: IRoute[] = [
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'AcademicSemesters',
		component: AcademicSemesters
	},
	{
		name: 'ExamsResults',
		component: ExamsResults
	},
	{
		name: 'ReaderTicket',
		component: ReaderTicket
	},
	{
		name: 'ScheduleCalls',
		component: ScheduleCalls
	},
	{
		name: 'UsefulLinks',
		component: UsefulLinks
	},
	{
		name: 'ChangePassword',
		component: ChangePassword
	}
]
