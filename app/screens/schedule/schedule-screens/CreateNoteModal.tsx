import { BottomSheet } from '@/components'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useBottomSheetAnimation } from '@/screens/login/hooks/useBottomSheetAnimation'
import {
	BottomSheetModal,
	BottomSheetModalProvider
} from '@gorhom/bottom-sheet'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import { TextInput, View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'

const CreateNoteModal = () => {
	const CORNER_RADIUS = 20
	const bottomSheetModalRef = useRef<BottomSheetModal>(null)
	const animatedPosition = useSharedValue(0)
	const [isDark, setIsDark] = useState(true)
	const [input, setInput] = useState('')
	const { animStyle } = useBottomSheetAnimation(animatedPosition, CORNER_RADIUS)

	const { goBack, getParent } = useTypedNavigation()

	useEffect(() => {
		const parentNavigator = getParent()
		if (parentNavigator) {
			parentNavigator.setOptions({ tabBarStyle: { display: 'none' } })
		}
		return () => {
			if (parentNavigator) {
				parentNavigator.setOptions({
					tabBarActiveTintColor: COLORS.light.graphics.blue,
					tabBarInactiveTintColor: COLORS.light.graphics.gray,
					tabBarStyle: {
						backgroundColor: COLORS.light.background.quaternary,
						elevation: 0,
						height: 65,
						paddingBottom: 7,
						borderTopColor: '#3c3c4321',
						borderTopWidth: 0.5
					}
				})
			}
		}
	}, [getParent])

	useEffect(() => {
		setIsDark(true)
		bottomSheetModalRef.current?.present()
	}, [bottomSheetModalRef])

	return (
		<>
			<StatusBar animated style={isDark ? 'light' : 'dark'} />
			<BottomSheetModalProvider>
				<View className='bg-black'>
					<BottomSheet
						animatedPosition={animatedPosition}
						bottomSheetModalRef={bottomSheetModalRef}
						setIsDark={setIsDark}
						onPress={goBack}
					>
						<View className='mt-5'>
							<TextInput
								className='px-5 py-3.5 '
								value={''}
								multiline
								placeholder='Введите текст'
								placeholderTextColor={COLORS.light.graphics.gray}
								autoCorrect={false}
								style={{
									fontFamily: 'pro-text-regular',
									fontSize: 16,
									letterSpacing: -0.24,
									borderTopWidth: 0.5,
									borderTopColor: 'rgba(60, 60, 67, 0.13)',
									borderBottomWidth: 0.5,
									borderBottomColor: 'rgba(60, 60, 67, 0.13)'
								}}
								selectionColor={COLORS.light.graphics.blue}
							/>
						</View>
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

export default CreateNoteModal
