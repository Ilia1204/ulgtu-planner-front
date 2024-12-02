export const sortAndGroupGroups = (groups: { name: string }[]) => {
	const sortedGroups = (groups || []).sort((a, b) => {
		const aNumber = parseInt(a.name.split('-')[1])
		const bNumber = parseInt(b.name.split('-')[1])
		return aNumber - bNumber
	})

	const groupedGroups: { [key: string]: { name: string }[] } =
		sortedGroups.reduce(
			(acc, group) => {
				const prefix = group.name.split('-')[0]
				if (!acc[prefix]) {
					acc[prefix] = []
				}
				acc[prefix].push(group)
				return acc
			},
			{} as { [key: string]: { name: string }[] }
		)

	const groupNamesString = Object.keys(groupedGroups)
		.sort()
		.map(prefix => {
			return groupedGroups[prefix].map(group => group.name).join(', ')
		})
		.join(', ')

	return groupNamesString
}
