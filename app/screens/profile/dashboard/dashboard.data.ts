import { TypeRootStackParamList } from '@/navigation/navigation.types'
import {
	ChangePassSvg,
	FaqSvg,
	GradeBookSvg,
	LibraryCardSvg,
	LogoutSvg,
	NotificationsSvg,
	ScheduleCallsSvg,
	UsefulLinksSvg
} from '../profile-svg'

export interface IDashboardData {
	icon: () => JSX.Element
	name: string
	path: keyof TypeRootStackParamList
}

export const dashboardData: IDashboardData[] = [
	{
		icon: GradeBookSvg,
		name: 'Зачётная книжка',
		path: 'AcademicSemesters'
	},
	{
		icon: LibraryCardSvg,
		name: 'Читательский билет',
		path: 'ReaderTicket'
	},
	{
		icon: ScheduleCallsSvg,
		name: 'Расписание звонков',
		path: 'ScheduleCalls'
	},
	{
		icon: NotificationsSvg,
		name: 'Уведомления',
		path: 'AcademicSemesters'
	},
	{
		icon: UsefulLinksSvg,
		name: 'Полезные ссылки',
		path: 'UsefulLinks'
	},
	{
		icon: FaqSvg,
		name: 'FAQ',
		path: 'AcademicSemesters'
	},
	{
		icon: ChangePassSvg,
		name: 'Сменить пароль',
		path: 'ChangePassword'
	},
	{
		icon: LogoutSvg,
		name: 'Выйти',
		path: 'AcademicSemesters'
	}
]
