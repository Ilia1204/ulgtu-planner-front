import { Loader } from '@/components'
import { useAuth } from '@/hooks/useAuth'
import Login from '@/screens/login/Login'
import OnBoarding from '@/screens/onboarding/OnBoarding'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
	NavigationContainer,
	useNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC, useEffect, useState } from 'react'
import TabNavigator from './bottom-menu/TabNavigator'
import { TypeRootStackParamList } from './navigation.types'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
	const navRef = useNavigationContainerRef()
	const { user } = useAuth()
	const [viewedOnboarding, setViewedOnboarding] = useState<boolean | null>(null)

	useEffect(() => {
		const checkOnboarding = async () => {
			try {
				const value = await AsyncStorage.getItem('@viewedOnboarding')
				if (value === null) setViewedOnboarding(false)
				else setViewedOnboarding(true)
			} catch (error: any) {
				// Toast.show({
				// 	text1: 'Ошибка получения splash-screen',
				// 	text2: errorCatch(error),
				// 	type: 'error'
				// })
			}
		}

		checkOnboarding()
	}, [])

	if (viewedOnboarding === null) return <Loader />

	return (
		<NavigationContainer ref={navRef}>
			{user ? (
				<TabNavigator />
			) : (
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{!viewedOnboarding && (
						<Stack.Screen name='OnBoarding' component={OnBoarding} />
					)}
					<Stack.Screen name='Login' component={Login} />
				</Stack.Navigator>
			)}
		</NavigationContainer>
	)
}

export default Navigation
