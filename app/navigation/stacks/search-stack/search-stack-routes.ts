import { IRoute } from '@/navigation/navigation.types'
import { Search } from '@/screens'
import SearchItem from '@/screens/search/search-item/SearchItem'

export const searchStackRoutes: IRoute[] = [
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'SearchItem',
		component: SearchItem
	}
]
