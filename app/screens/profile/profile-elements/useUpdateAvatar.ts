import { errorCatch } from '@/api/error'
import { userService } from '@/services/user.service'
import { TypeUserForm } from '@/shared/types/user.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateAvatar() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update avatar profile'],
		mutationFn: (data: Pick<TypeUserForm, 'avatarPath'>) =>
			userService.updateAvatar(data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		},
		onError(error) {
			console.log(errorCatch(error))
		}
	})

	return { mutate, isPending }
}
