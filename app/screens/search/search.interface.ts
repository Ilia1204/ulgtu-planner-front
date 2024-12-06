import { IGroup } from '@/shared/types/group.interface'
import { RefetchOptions, QueryObserverResult } from '@tanstack/react-query'

export interface ISearchFormData {
	searchTerm: string
}

export interface IGroupById {
	group: IGroup
	isFetching: boolean
	isPending: false
	refetch: (
		options?: RefetchOptions | undefined
	) => Promise<QueryObserverResult<IGroup, Error>>
}
