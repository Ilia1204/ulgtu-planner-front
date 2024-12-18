import { validEmail } from '@/shared/email.rgx'

export const determineInputType = (input: string) => {
	if (validEmail.test(input)) return { email: input }
	if (/^\d{2}\/\d{2,4}$/.test(input)) return { creditCardNumber: input }
	return { username: input }
}
