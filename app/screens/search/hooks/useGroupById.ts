import { groupService } from '@/services/group.service'
import type { IGroup } from '@/shared/types/group.interface'
import { useQuery } from '@tanstack/react-query'

export const useGroupById = (groupId: string) => {
	const {
		data: group,
		isFetching,
		isPending
	} = useQuery({
		queryKey: ['get group by id'],
		queryFn: () => groupService.getById(groupId),
		enabled: !!groupId,
		initialData: {} as IGroup
	})

	return { group, isFetching, isPending }
}
