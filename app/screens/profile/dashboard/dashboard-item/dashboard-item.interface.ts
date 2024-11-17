import { IDashboardData } from '../dashboard.data'

export interface IDashBoardItem {
	onPress: () => void
	item: IDashboardData
	idx: number
	array: IDashboardData[]
	notificationsEnabled?: boolean
}
