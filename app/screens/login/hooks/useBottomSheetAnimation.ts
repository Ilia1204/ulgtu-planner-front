import { useMemo } from 'react'
import { Platform, useWindowDimensions } from 'react-native'
import {
	SharedValue,
	clamp,
	interpolate,
	useAnimatedReaction,
	useAnimatedStyle,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const useBottomSheetAnimation = (
	animatedPosition: SharedValue<number>,
	CORNER_RADIUS: number
) => {
	const { top } = useSafeAreaInsets()
	const { height } = useWindowDimensions()

	const animatedValue = useSharedValue(height)
	const scaleValue = useMemo(
		() => (Platform.OS === 'android' ? 0.87 : 0.855),
		[]
	)

	const animStyle = useAnimatedStyle(() => {
		return {
			borderTopLeftRadius:
				Platform.OS === 'ios'
					? interpolate(animatedValue.value, [height / 1.5, top], [40, 10])
					: interpolate(
							animatedValue.value,
							[height / 1.5, top],
							[CORNER_RADIUS / 2.5, 10]
						),
			borderTopRightRadius:
				Platform.OS === 'ios'
					? interpolate(animatedValue.value, [height / 1.5, top], [40, 10])
					: interpolate(
							animatedValue.value,
							[height / 1.5, top],
							[CORNER_RADIUS / 2.5, 10]
						),
			transform: [
				{
					scale: interpolate(
						animatedValue.value,
						[height / 1.5, top],
						[0.974, scaleValue]
					)
				}
			]
		}
	})

	useAnimatedReaction(
		() => animatedPosition.value,
		(position: number) => {
			if (position === 0) {
				animatedValue.value = withTiming(height)
				return
			}
			animatedValue.value = clamp(position, 0, height)
		},
		[]
	)

	return { animStyle, animatedValue }
}
