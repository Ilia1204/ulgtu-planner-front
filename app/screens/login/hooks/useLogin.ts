import { errorCatch } from '@/api/error'
import { useAuth } from '@/hooks/useAuth'
import { saveUserStorage } from '@/services/auth-token.services'
import { authService } from '@/services/auth.service'
import type { IAuthForm, IAuthResponse } from '@/shared/types/auth.interface'
import { showToast } from '@/utils/show-toast'
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
			setTimeout(() => {
				showToast('Ошибка задания пароля: ', 'error', errorCatch(error))
			}, 500)
		}
	})

	const { mutate: validatePassword, isPending: isPendingValidatePassword } =
		useMutation({
			mutationKey: ['validate-password'],
			mutationFn: (data: { password: string }) =>
				authService.validatePassword(data),
			onSuccess() {
				reset()
				setUser(data?.data.user ?? null)
				saveUserStorage(data?.data as IAuthResponse)
			},
			onError(error: any) {
				setError(errorCatch(error))
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
			setTimeout(() => {
				showToast('Ошибка задания почты: ', 'error', errorCatch(error))
			}, 500)
		}
	})

	return useMemo(
		() => ({
			mutate,
			isPending,
			setPassword,
			setRecoveryEmail,
			validatePassword,
			data,
			isPendingEmail,
			isPendingSetPass,
			isPendingValidatePassword
		}),
		[isPending, isPendingSetPass, isPendingEmail, isPendingValidatePassword]
	)
}
