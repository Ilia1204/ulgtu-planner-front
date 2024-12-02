import { Animated, PanResponder } from 'react-native'

export const createPanResponder = (translateX: Animated.Value) => {
	return PanResponder.create({
		onStartShouldSetPanResponder: () => true,
		onMoveShouldSetPanResponder: () => true,
		onPanResponderMove: (_, gestureState) => {
			if (gestureState.dx < 0) {
				translateX.setValue(gestureState.dx)
			}
		},
		onPanResponderRelease: (_, gestureState) => {
			if (gestureState.dx < -50) {
				Animated.spring(translateX, {
					toValue: -100,
					useNativeDriver: true
				}).start()
			} else {
				Animated.spring(translateX, {
					toValue: 0,
					useNativeDriver: true
				}).start()
			}
		}
	})
}
