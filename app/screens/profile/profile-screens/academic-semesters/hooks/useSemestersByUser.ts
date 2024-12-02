import { semesterService } from '@/services/semester.service'
import { useQuery } from '@tanstack/react-query'

export function useSemestersByUser() {
	const {
		data: semesters,
		isLoading,
		isFetching,
		refetch
	} = useQuery({
		queryKey: ['get semesters by user'],
		queryFn: () => semesterService.getByUser()
	})

	return { semesters, isLoading, isFetching, refetch }
}
