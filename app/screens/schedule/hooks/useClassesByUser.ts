import { scheduleService } from '@/services/schedule.service'
import { useQuery } from '@tanstack/react-query'

export function useClassesByUser() {
	const {
		data: classes,
		isLoading,
		isFetching,
		refetch
	} = useQuery({
		queryKey: ['get schedules by user'],
		queryFn: () => scheduleService.getSchedulesForStudent()
	})

	return { classes, isLoading, isFetching, refetch }
}
