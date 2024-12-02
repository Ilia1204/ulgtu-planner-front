import { classService } from '@/services/class.service'
import { IClass } from '@/shared/types/class.interface'
import { useQuery } from '@tanstack/react-query'

export const useLessonById = (lessonId: string) => {
	const {
		data: lesson,
		isFetching,
		isPending
	} = useQuery({
		queryKey: ['get lesson by id'],
		queryFn: () => classService.getById(lessonId),
		enabled: !!lessonId,
		initialData: {} as IClass
	})

	return { lesson, isFetching, isPending }
}
