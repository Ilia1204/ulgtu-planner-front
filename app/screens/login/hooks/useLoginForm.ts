import type { IAuthForm } from '@/shared/types/auth.interface'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { registrationSteps } from '../reg-steps.data'
import { determineInputType } from '../utils/determine-input-type'
import { getRegistrationState } from '../utils/storage'
import { useLogin } from './useLogin'

export const useLoginForm = () => {
	const [step, setStep] = useState(0)
	const [input, setInput] = useState('')
	const [error, setError] = useState('')
	const [isRegistered, setIsRegistered] = useState(false)

	const { reset, handleSubmit } = useForm<IAuthForm>({ mode: 'onChange' })
	const {
		mutate,
		setPassword,
		setRecoveryEmail,
		isPending,
		isPendingEmail,
		isPendingSetPass,
		validatePassword,
		isPendingValidatePassword,
		data
	} = useLogin({
		reset,
		setStep,
		setError
	})

	useEffect(() => {
		const fetchRegistrationState = async () => {
			const state = await getRegistrationState()
			setIsRegistered(state)
			if (state) setStep(0)
		}
		fetchRegistrationState()
	}, [])

	const onSubmit = () => {
		const inputData = determineInputType(input)

		if (isRegistered) {
			if (step === 0) mutate(inputData)
			else if (step === 1) validatePassword({ password: input })
		} else {
			switch (step) {
				case 0:
					mutate(inputData)
					break
				case 1:
					setPassword({ password: input })
					break
				case 2:
					setRecoveryEmail({ recoveryEmail: input })
					break
				default:
					break
			}
		}
		setInput('')
	}

	const updatedSteps = isRegistered
		? [
				{ ...registrationSteps[0], buttonText: 'Войти' },
				{
					...registrationSteps[1],
					title: `Здравствуйте, ${data?.data.name}! Введите пароль`,
					placeholder: 'Пароль',
					buttonText: 'Войти'
				}
			]
		: [
				{ ...registrationSteps[step] },
				step === 1
					? {
							...registrationSteps[1],
							title: `Здравствуйте, ${data?.data.name}! Придумайте пароль`
						}
					: registrationSteps[1],
				...registrationSteps.slice(2)
			]

	return {
		step,
		isPending:
			isPending ||
			isPendingEmail ||
			isPendingSetPass ||
			isPendingValidatePassword,
		currentStep: registrationSteps[step] || registrationSteps[0],
		handleSubmit,
		error,
		input,
		setInput,
		onSubmit,
		isRegistered,
		updatedSteps
	}
}
