import { studentExamsResultsService } from '@/services/student-exams-results.services'
import { useQuery } from '@tanstack/react-query'

export const useExamsResultsBySemesterId = (semesterId: string) => {
	const {
		data: results,
		isFetching,
		isPending,
		refetch
	} = useQuery({
		queryKey: ['get exams results by semester id'],
		queryFn: () => studentExamsResultsService.getBySemesterId(semesterId)
	})

	return { results, isFetching, isPending, refetch }
}
