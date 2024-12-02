import { IClass } from '@/shared/types/class.interface'
import dayjs from 'dayjs'
import { MutableRefObject, RefObject } from 'react'
import { ScrollView, View } from 'react-native'
import { groupByDay } from './group-by-day'

const currentDate = dayjs().startOf('day')

export const scrollToCurrentDay = async (
	classes: IClass[] | undefined,
	scrollViewRef: RefObject<ScrollView>,
	scheduleRefs: MutableRefObject<Array<View | null>>
) => {
	if (scrollViewRef.current && classes) {
		const groupedClasses = groupByDay(classes)

		const currentIndex = groupedClasses.findIndex(([key, group]) =>
			(group as IClass[]).some(cls =>
				dayjs(cls.schedule.date).isSame(currentDate, 'day')
			)
		)

		if (currentIndex >= 0) {
			const { y } = await new Promise<{ y: number; height: number }>(
				resolve => {
					scheduleRefs.current[currentIndex]?.measure(
						(x, y, width, height, pageX, pageY) => {
							resolve({ y: pageY, height })
						}
					)
				}
			)

			setTimeout(() => {
				scrollViewRef.current?.scrollTo({ y: y - 52, animated: true })
			}, 200)
		}
	}
}
