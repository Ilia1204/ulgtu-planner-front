import { Loader } from '@/components'
import { COLORS } from '@/constants/colors.constants'
import Navigation from '@/navigation/Navigation'
import AuthProvider from '@/providers/AuthProvider'
import { loadFonts } from '@/utils/load-fonts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'
import * as NavigationBar from 'expo-navigation-bar'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

require('dayjs/locale/ru')
dayjs.locale('ru')

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		NavigationBar.setBackgroundColorAsync(COLORS.light.background.quaternary)
	}, [])

	useEffect(() => {
		async function loadFontsAsync() {
			await loadFonts()
			setLoaded(true)
		}
		loadFontsAsync()
	}, [])

	if (!loaded) return <Loader className='flex-1 items-center justify-center' />

	return (
		<GestureHandlerRootView className='flex-1'>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<SafeAreaProvider>
						<Navigation />
					</SafeAreaProvider>
				</AuthProvider>
				<StatusBar
					backgroundColor={COLORS.light.background.tertiary}
					barStyle='dark-content'
				/>
			</QueryClientProvider>
		</GestureHandlerRootView>
	)
}
