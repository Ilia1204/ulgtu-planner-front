import { errorCatch } from '@/api/error'
import { useAuth } from '@/hooks/useAuth'
import { saveUserStorage } from '@/services/auth-token.services'
import { authService } from '@/services/auth.service'
import type { IAuthForm, IAuthResponse } from '@/shared/types/auth.interface'
import { useMutation } from '@tanstack/react-query'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { UseFormReset } from 'react-hook-form'
import { getRegistrationState, setRegistrationState } from '../utils/storage'

interface IUseLogin {
	reset: UseFormReset<IAuthForm>
	setStep: Dispatch<SetStateAction<number>>
	setError: Dispatch<SetStateAction<string>>
}

export const useLogin = (props: IUseLogin) => {
	const { reset, setStep, setError } = props
	const [isRegistered, setIsRegistered] = useState(false)

	useEffect(() => {
		const fetchRegistrationState = async () => {
			const state = await getRegistrationState()
			setIsRegistered(state)
			if (state) setStep(0)
		}
		fetchRegistrationState()
	}, [])

	const { setUser } = useAuth()

	const { data, mutate, isPending } = useMutation({
		mutationKey: ['login'],
		mutationFn: (data: IAuthForm) => authService.initiateLogin(data),
		onSuccess() {
			reset()
			setStep(1)
			setError('')
		},
		onError(error) {
			setError(errorCatch(error))
			console.log(error.message)
		}
	})

	const { mutate: setPassword, isPending: isPendingSetPass } = useMutation({
		mutationKey: ['set-password'],
		mutationFn: (data: { password: string }) => authService.setPassword(data),
		onSuccess() {
			reset()
			if (!isRegistered) setStep(2)
			else {
				setUser(data?.data.user ?? null)
				saveUserStorage(data?.data as IAuthResponse)
			}
		},
		onError(error: any) {
			console.log(error.message)
		}
	})

	const { mutate: setRecoveryEmail, isPending: isPendingEmail } = useMutation({
		mutationKey: ['set-recovery-email'],
		mutationFn: (data: { recoveryEmail: string }) =>
			authService.setRecoveryEmail(data),
		onSuccess: async () => {
			reset()
			setUser(data?.data.user ?? null)
			saveUserStorage(data?.data as IAuthResponse)
			await setRegistrationState(true)
		},
		onError(error) {
			console.log(error.message)
		}
	})

	return useMemo(
		() => ({
			mutate,
			isPending,
			setPassword,
			setRecoveryEmail,
			data,
			isPendingEmail,
			isPendingSetPass
		}),
		[isPending, isPendingSetPass, isPendingEmail]
	)
}
