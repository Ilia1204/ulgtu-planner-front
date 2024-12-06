import { IRoute } from '@/navigation/navigation.types'
import { Schedule } from '@/screens'
import CreateNoteModal from '@/screens/schedule/schedule-screens/CreateNoteModal'
import LessonItem from '@/screens/schedule/schedule-screens/lesson-item/LessonItem'
import SearchItem from '@/screens/search/search-item/SearchItem'

export const scheduleStackRoutes: IRoute[] = [
	{
		name: 'Schedule',
		component: Schedule
	},
	{
		name: 'LessonItem',
		component: LessonItem
	},
	{
		name: 'CreateNoteModal',
		component: CreateNoteModal
	},
	{
		name: 'SearchItem',
		component: SearchItem
	}
]
