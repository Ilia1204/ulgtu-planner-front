import dayjs from 'dayjs'

const currentTime = dayjs()

export const getCurrentTime = (
	lessonStartTime: string,
	lessonEndTime: string
) => {
	const startTime = dayjs(lessonStartTime, 'HH:mm')
	const endTime = dayjs(lessonEndTime, 'HH:mm')
	return currentTime.isAfter(startTime) && currentTime.isBefore(endTime)
}
