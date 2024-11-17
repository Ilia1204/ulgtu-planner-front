import { COLORS } from '@/constants/colors.constants'
import React, { FC } from 'react'
import { Animated, View, useWindowDimensions } from 'react-native'
import type { ISlide } from './slides/slide.interface'

type TypePaginator = {
	data: ISlide[]
	scrollX: Animated.Value
}

const Paginator: FC<TypePaginator> = ({ data, scrollX }) => {
	const { width } = useWindowDimensions()

	return (
		<View style={{ flexDirection: 'row', height: 64 }}>
			{data.map((_, i) => {
				const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 10, 10],
					extrapolate: 'clamp'
				})

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.2, 1, 0.2],
					extrapolate: 'clamp'
				})

				const dotColor = scrollX.interpolate({
					inputRange,
					outputRange: ['#3C3C43', COLORS.light.graphics.blue, '#3C3C43'],
					extrapolate: 'clamp'
				})

				return (
					<Animated.View
						style={{ width: dotWidth, opacity, backgroundColor: dotColor }}
						className='h-2 aspect-square rounded-md bg-light-graphics-blue mx-1.5'
						key={i.toString()}
					/>
				)
			})}
		</View>
	)
}

export default Paginator
