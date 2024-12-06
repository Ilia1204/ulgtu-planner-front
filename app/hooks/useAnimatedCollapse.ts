import { useEffect, useState } from 'react'
import {
	Easing,
	measure,
	runOnUI,
	useAnimatedRef,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'

export const useAnimatedCollapse = (initialOpen: boolean = true) => {
	const listRef = useAnimatedRef()
	const open = useSharedValue(initialOpen)
	const progress = useDerivedValue(() =>
		open.value ? withTiming(0) : withTiming(1)
	)

	const [contentHeight, setContentHeight] = useState(0)
	const heightValue = useSharedValue(-1)

	const handleLayout = (event: any) => {
		const { height } = event.nativeEvent.layout
		if (height !== contentHeight) {
			if (height > 0 && heightValue.value === -1) {
				heightValue.value = height
				setContentHeight(height)
			}
		}
	}

	const handlePress = () => {
		runOnUI(() => {
			'worklet'
			if (heightValue.value === 0 && listRef) {
				const measured = measure(listRef)

				if (measured?.height)
					heightValue.value = withTiming(measured.height, {
						duration: 200,
						easing: Easing.bezier(0.42, 0, 0.58, 1)
					})
				else
					heightValue.value = withTiming(contentHeight, {
						duration: 200,
						easing: Easing.bezier(0.42, 0, 0.58, 1)
					})
			} else
				heightValue.value = withTiming(0, {
					duration: 200,
					easing: Easing.bezier(0.42, 0, 0.58, 1)
				})

			open.value = !open.value
		})()
	}

	useEffect(() => {
		if (contentHeight > 0 && heightValue.value === -1) {
			heightValue.value = withTiming(contentHeight, {
				duration: 200,
				easing: Easing.bezier(0.42, 0, 0.58, 1)
			})
		}
	}, [contentHeight])

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: heightValue.value,
		overflow: 'hidden'
	}))

	const iconStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${progress.value * 180}deg` }]
	}))

	return {
		listRef,
		handleLayout,
		handlePress,
		heightAnimationStyle,
		iconStyle,
		open
	}
}
