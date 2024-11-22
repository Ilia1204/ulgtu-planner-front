import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'
import { authService } from '@/services/auth.service'
import { userService } from '@/services/user.service'

export function useProfile() {
	const queryClient = useQueryClient()
	const { setUser } = useAuth()

	const { data, isLoading, isSuccess, refetch, isFetching } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService.getProfile()
	})

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSettled: () => {
			setUser(null)
			queryClient.removeQueries({ queryKey: ['get profile'] })
		}
	})

	return { data, isLoading, logout, isSuccess, refetch, isFetching }
}
