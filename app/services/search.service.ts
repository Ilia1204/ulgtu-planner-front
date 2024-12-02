import { axiosWithAuth } from '@/api/interceptors'
import { SearchResults } from '@/screens/search/hooks/useSearch'

class SearchService {
	private BASE_URL = '/search'

	async getAll(searchTerm?: string) {
		const response = await axiosWithAuth.get<SearchResults[]>(this.BASE_URL, {
			params: searchTerm ? { searchTerm } : {}
		})
		return response.data
	}
}

export const searchService = new SearchService()
