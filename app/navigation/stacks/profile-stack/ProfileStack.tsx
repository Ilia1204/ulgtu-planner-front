import { Loader } from '@/components'
import { screensWithoutTabBar } from '@/navigation/bottom-menu/screen-without-tab-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC, useEffect, useState } from 'react'
import { TypeRootStackParamList } from '../../navigation.types'
import { profileStackRoutes } from './profile-stack.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const ProfileStack: FC = () => {
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
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{profileStackRoutes.map(route => (
				<Stack.Screen
					key={route.name}
					{...route}
					options={({ navigation }) => ({
						headerShown: false,
						tabBarStyle: {
							display: screensWithoutTabBar.includes(navigation.name)
								? 'none'
								: 'flex'
						},
						tabBarVisible: !screensWithoutTabBar.includes(navigation.name)
					})}
				/>
			))}
		</Stack.Navigator>
	)
}

export default ProfileStack
