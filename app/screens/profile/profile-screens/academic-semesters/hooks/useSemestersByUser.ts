import { semesterService } from '@/services/semester.service'
import { useQuery } from '@tanstack/react-query'

export function useSemestersByUser() {
	const {
		data: semesters,
		isLoading,
		isPending,
		refetch
	} = useQuery({
		queryKey: ['get semesters by user'],
		queryFn: () => semesterService.getByUser()
	})

	return { semesters, isLoading, isPending, refetch }
}
