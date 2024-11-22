import { BottomSheet, Loader } from '@/components'
import {
	BottomSheetModal,
	BottomSheetModalProvider
} from '@gorhom/bottom-sheet'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { useBottomSheetAnimation } from './hooks/useBottomSheetAnimation'
import { useLoginForm } from './hooks/useLoginForm'
import { FormContent } from './login-elements/FormContent'
import { StepsContent } from './login-elements/StepsContent'

const Login = () => {
	const CORNER_RADIUS = 20
	const bottomSheetModalRef = useRef<BottomSheetModal>(null)
	const animatedPosition = useSharedValue(0)
	const [isDark, setIsDark] = useState(true)
	const { animStyle } = useBottomSheetAnimation(animatedPosition, CORNER_RADIUS)

	const {
		step,
		isPending,
		handleSubmit,
		error,
		input,
		setInput,
		onSubmit,
		updatedSteps,
		isRegistered
	} = useLoginForm()

	useEffect(() => {
		setIsDark(true)
	}, [bottomSheetModalRef])

	bottomSheetModalRef.current?.present()

	return (
		<>
			<StatusBar animated style={isDark ? 'light' : 'dark'} />
			<BottomSheetModalProvider>
				<View className='bg-black'>
					<BottomSheet
						animatedPosition={animatedPosition}
						bottomSheetModalRef={bottomSheetModalRef}
						setIsDark={setIsDark}
					>
						{isPending ? (
							<Loader className='mt-7' />
						) : (
							<>
								<StepsContent step={step} updatedSteps={updatedSteps} />
								<FormContent
									step={step}
									error={error}
									input={input}
									setInput={setInput}
									handleSubmit={handleSubmit}
									onSubmit={onSubmit}
									isRegistered={isRegistered}
									updatedSteps={updatedSteps}
								/>
							</>
						)}
					</BottomSheet>
					<Animated.View
						style={[{ borderRadius: 10 }, animStyle]}
						className='h-[110%] w-full justify-center bg-white'
					/>
				</View>
			</BottomSheetModalProvider>
		</>
	)
}

export default Login
