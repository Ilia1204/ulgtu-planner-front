import { BottomSheet, DisplayBold, ProTextRegular } from '@/components'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useBottomSheetAnimation } from '@/screens/login/hooks/useBottomSheetAnimation'
import {
	BottomSheetModal,
	BottomSheetModalProvider
} from '@gorhom/bottom-sheet'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import Animated, { useSharedValue } from 'react-native-reanimated'

const ChangePassword = () => {
	const CORNER_RADIUS = 20
	const bottomSheetModalRef = useRef<BottomSheetModal>(null)
	const animatedPosition = useSharedValue(0)
	const [isDark, setIsDark] = useState(true)
	const { animStyle } = useBottomSheetAnimation(animatedPosition, CORNER_RADIUS)

	const { goBack } = useTypedNavigation()

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
						onPress={goBack}
					>
						<View className='px-4 mt-7'>
							<DisplayBold
								text='Восстановление пароля'
								styles={{ fontSize: 27 }}
							/>
							<ProTextRegular
								className='text-light-label-secondary opacity-60 mt-4'
								text='Введите адрес электронной почты, логин или номер зачетки и мы отправим вам ссылку для восстановления пароля'
								style={{ fontSize: 15, letterSpacing: -0.41 }}
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

export default ChangePassword
