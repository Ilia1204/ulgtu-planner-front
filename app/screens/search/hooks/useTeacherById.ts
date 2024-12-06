import { employmentInfoService } from '@/services/employment-info.service'
import { IEmploymentInfo } from '@/shared/types/employment-info.interface'
import { useQuery } from '@tanstack/react-query'

export const useTeacherById = (teacherId: string) => {
	const {
		data: teacher,
		isFetching,
		isPending,
		refetch
	} = useQuery({
		queryKey: ['get teacher by id'],
		queryFn: () => employmentInfoService.getById(teacherId),
		enabled: !!teacherId,
		initialData: {} as IEmploymentInfo
	})

	return { teacher, isFetching, isPending, refetch }
}
