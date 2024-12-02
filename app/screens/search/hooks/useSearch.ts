import { roomService } from '@/services/room.service'
import { IEmploymentInfo } from '@/shared/types/employment-info.interface'
import { IGroup } from '@/shared/types/group.interface'
import { IRoom } from '@/shared/types/room.interface'
import { useQuery } from '@tanstack/react-query'
import { useSearchForm } from './useSearchTerm'

export type SearchResults = IRoom & IGroup & IEmploymentInfo

export function useSearch() {
	const { searchTerm, debouncedSearch, control } = useSearchForm()

	const { data, isLoading } = useQuery({
		queryKey: ['search rooms', debouncedSearch],
		queryFn: () => roomService.getAll(debouncedSearch),
		enabled: !!debouncedSearch,
		initialData: [] as SearchResults[]
	})

	return { data, isLoading, control, searchTerm }
}
