const scheduleTimes = [
	{ start: '8:30', end: '9:50' },
	{ start: '10:00', end: '11:20' },
	{ start: '11:30', end: '12:50' },
	{ start: '13:30', end: '14:50' },
	{ start: '15:00', end: '16:20' },
	{ start: '16:30', end: '17:50' },
	{ start: '18:00', end: '19:20' },
	{ start: '19:30', end: '20:50' }
]

export const getLessonTimes = (pairNumber: number) => {
	const index = pairNumber - 1
	return scheduleTimes[index] || { start: '', end: '' }
}
