import AsyncStorage from '@react-native-async-storage/async-storage'

const REGISTRATION_STATE_KEY = 'registrationState'

export const setRegistrationState = async (isRegistered: boolean) => {
	try {
		await AsyncStorage.setItem(
			REGISTRATION_STATE_KEY,
			JSON.stringify(isRegistered)
		)
	} catch (e) {
		console.error('Ошибка сохранения состояния', e)
	}
}

export const getRegistrationState = async () => {
	try {
		const value = await AsyncStorage.getItem(REGISTRATION_STATE_KEY)
		return value !== null ? JSON.parse(value) : false
	} catch (e) {
		console.error('Ошибка получения состояния', e)
		return false
	}
}
