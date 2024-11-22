import { scheduleService } from '@/services/schedule.service'
import { useQuery } from '@tanstack/react-query'

export function useSchedulesByUser() {
	const {
		data: schedules,
		isLoading,
		isPending,
		refetch
	} = useQuery({
		queryKey: ['get schedules by user'],
		queryFn: () => scheduleService.getSchedulesForStudent()
	})

	return { schedules, isLoading, isPending, refetch }
}
