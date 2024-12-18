import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState
} from 'react'
import { Image, LayoutChangeEvent } from 'react-native'
import Animated, {
	Easing,
	Extrapolation,
	interpolate,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withTiming
} from 'react-native-reanimated'
import type { ConfigProps, IToast, Props } from './toast.interface'

const Toast = forwardRef<IToast, Props>(({ duration = 400, onHide }, ref) => {
	const [textLength, setTextLength] = useState(0)
	const [toastHeight, setToastHeight] = useState(0)
	const [config, setConfig] = useState<ConfigProps>({
		text: undefined,
		type: undefined,
		duration: 0
	})
	const visibleState = useRef(false)
	const timer = useRef<number | null>(null)
	const transY = useSharedValue(0)
	const transX = useSharedValue(0)

	useImperativeHandle(ref, () => ({ show, hide }))

	useEffect(() => {
		if (textLength && toastHeight && config.text) {
			transX.value = textLength + 12
			showToast()
			timer.current = Number(
				setTimeout(() => {
					hideToast()
				}, 4000)
			)
		}

		return () => {
			if (timer.current) clearTimeout(timer.current)
		}
	}, [config, toastHeight, textLength])

	useEffect(() => {
		if (toastHeight) transY.value = -toastHeight
	}, [toastHeight])

	const rView = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: transY.value }],
			opacity: interpolate(
				transY.value,
				[-toastHeight, 80],
				[0, 1],
				Extrapolation.CLAMP
			)
		}
	}, [toastHeight])

	const rOuterView = useAnimatedStyle(() => {
		return { transform: [{ translateX: -Math.max(transX.value, 1) / 2 }] }
	}, [])
	const rInnerView = useAnimatedStyle(() => {
		return { transform: [{ translateX: transX.value }] }
	}, [])
	const rText = useAnimatedStyle(() => {
		return { opacity: interpolate(transX.value, [0, textLength], [1, 0]) }
	}, [textLength])

	return (
		<Animated.View
			onLayout={handleViewLayout}
			style={[rView]}
			className='absolute top-0 z-50 mx-6'
		>
			<Animated.View
				style={[rOuterView]}
				className='overflow-hidden rounded-3xl'
			>
				<Animated.View
					style={[rInnerView, { backgroundColor: generateBackgroundColor() }]}
					className='flex-row items-center justify-center p-3 rounded-3xl'
				>
					<Image source={generateImage()} style={{ width: 20, height: 20 }} />
					<Animated.Text
						onLayout={handleTextLayout}
						style={[rText]}
						className='text-white font-semibold text-base ml-3 text-center'
					>
						{config?.text}
					</Animated.Text>
				</Animated.View>
			</Animated.View>
		</Animated.View>
	)

	function show(
		text: string,
		type: 'info' | 'success' | 'error',
		duration: number
	) {
		setConfig({ text, type, duration })
	}

	function hide(callback?: () => void) {
		hideToast(callback)
	}

	function generateImage() {
		if (config?.type === 'success') return require('../assets/success.png')
		else if (config?.type === 'error') return require('../assets/error.png')
		else return require('../assets/info.png')
	}

	function generateBackgroundColor() {
		if (config?.type === 'success') return '#1f8503'
		else if (config?.type === 'error') return '#f00a1d'
		else return '#0077ed'
	}

	function showToast() {
		if (!visibleState.current) {
			visibleState.current = true
			transY.value = withTiming(80, { duration: config.duration })
			transX.value = withDelay(
				config.duration,
				withTiming(0, { duration: config.duration })
			)
		}
	}

	function hideToast(callback?: () => void) {
		if (timer.current) clearTimeout(timer.current)

		transX.value = withTiming(textLength + 12, { duration })
		transY.value = withDelay(
			config.duration,
			withTiming(
				-toastHeight,
				{
					duration: config.duration,
					easing: Easing.bezierFn(0.36, 0, 0.66, -0.56)
				},
				() => {
					runOnJS(handleOnFinish)(callback)
				}
			)
		)
	}

	function handleOnFinish(callback?: () => void) {
		setConfig({
			text: undefined,
			type: undefined,
			duration: 0
		})
		if (onHide) onHide()
		if (callback) {
			setTimeout(() => {
				callback()
			}, 100)
		}
		visibleState.current = false
	}

	function handleTextLayout(event: LayoutChangeEvent) {
		if (textLength !== event.nativeEvent.layout.width)
			setTextLength(Math.floor(event.nativeEvent.layout.width))
	}

	function handleViewLayout(event: LayoutChangeEvent) {
		if (toastHeight !== event.nativeEvent.layout.height)
			setToastHeight(event.nativeEvent.layout.height)
	}
})

export default Toast
