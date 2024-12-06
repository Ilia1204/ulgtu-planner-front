import { Loader } from '@/components'
import { COLORS } from '@/constants/colors.constants'
import Navigation from '@/navigation/Navigation'
import AuthProvider from '@/providers/AuthProvider'
import { loadFonts } from '@/utils/load-fonts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import * as NavigationBar from 'expo-navigation-bar'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { LocaleConfig } from 'react-native-calendars'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NotifierWrapper } from 'react-native-notifier'
import { SafeAreaProvider } from 'react-native-safe-area-context'

require('dayjs/locale/ru')
dayjs.locale('ru')
dayjs.extend(customParseFormat)

LocaleConfig.locales['ru'] = {
	monthNames: [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	],
	dayNames: [
		'Понедельник',
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi'
	],
	dayNamesShort: ['В', 'П', 'В', 'C', 'Ч', 'П', 'С'],
	today: 'Понедельник'
}

LocaleConfig.defaultLocale = 'ru'

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
						<NotifierWrapper>
							<Navigation />
						</NotifierWrapper>
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

/* 
 TODO:
	[] - Админ-панель
	TODO:
	[] - Пуш уведомления для каждой группы о начала пар, переноса их в другую аудиторию, отмене и т.д.
	
	[] - Сторисы
	[] - Календарь
	[] - Восстановление пароля
	
	[] - Чат 
	[] - Тёмная тема
*/
