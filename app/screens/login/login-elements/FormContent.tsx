import ButtonBackground from '@/components/ui/buttons/ButtonBackground'
import Field from '@/components/ui/form-elements/field/Field'
import { validEmail } from '@/shared/email.rgx'
import type { IAuthForm } from '@/shared/types/auth.interface'
import React, { FC } from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'
import { View } from 'react-native'
import { ErrorText } from './ErrorText'
import { PasswordValidationText } from './ValidationText'

interface IFormContent {
	step: number
	error: string
	input: string
	isRegistered: boolean
	setInput: (input: string) => void
	handleSubmit: UseFormHandleSubmit<IAuthForm, undefined>
	onSubmit: () => void
	updatedSteps: {
		placeholder: string
		buttonText: string
	}[]
}

export const FormContent: FC<IFormContent> = props => {
	const {
		step,
		error,
		input,
		setInput,
		handleSubmit,
		onSubmit,
		updatedSteps,
		isRegistered
	} = props

	return (
		<View>
			<View className='mx-4'>
				<Field
					val={input}
					onChange={setInput}
					placeholder={updatedSteps[step]?.placeholder}
					isSecure={step === 1 && true}
				/>
				{error && <ErrorText error={error} />}
				{(step === 1 || step === 2) && !isRegistered && (
					<PasswordValidationText input={input} step={step} />
				)}
			</View>
			<ButtonBackground
				input={input}
				onPress={
					(step === 1 && input.length >= 8 && /^(?=.*\d.*\d).*$/.test(input)) ||
					(step === 2 && validEmail.test(input)) ||
					step === 0 ||
					isRegistered
						? handleSubmit(onSubmit)
						: () => {}
				}
				buttonText={updatedSteps[step]?.buttonText}
				styles={{ marginTop: 90, marginBottom: 5 }}
				disabled={!input}
			/>
		</View>
	)
}
