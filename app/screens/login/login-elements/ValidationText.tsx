import { ProTextRegular } from '@/components'
import { validEmail } from '@/shared/email.rgx'
import React, { FC } from 'react'

interface IValidationText {
	input: string
	step: number
}

export const PasswordValidationText: FC<IValidationText> = props => {
	const { input, step } = props

	const isShort = input.length < 8 && input.length > 0 && step === 1
	const lacksDigits =
		input.length >= 8 && !/^(?=.*\d.*\d).*$/.test(input) && step === 1
	const emailValid = !validEmail.test(input) && input.length > 0 && step === 2

	return (
		<ProTextRegular
			style={{ fontSize: 15 }}
			className='text-light-graphics-red absolute -bottom-7'
			text={
				isShort
					? 'Минимальная длина 8 символов'
					: lacksDigits
						? 'Недостаточно цифр'
						: emailValid
							? 'Невалидный email'
							: ''
			}
		/>
	)
}
