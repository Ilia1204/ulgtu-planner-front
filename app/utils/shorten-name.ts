export function shortenName(fullName: string) {
	const parts = fullName?.split(' ')

	const initials = parts
		?.slice(1)
		?.map(part => part[0] + '.')
		?.join('')

	return `${parts[0]} ${initials}`
}
