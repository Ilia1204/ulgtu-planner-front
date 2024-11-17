import type { IAuthResponse } from '@/shared/types/auth.interface'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken'
}

export enum EnumAsyncStorage {
	USER = 'user'
}

export const getUserFromStorage = async () => {
	try {
		return JSON.parse(
			(await AsyncStorage.getItem(EnumAsyncStorage.USER)) || '{}'
		)
	} catch (e) {
		return null
	}
}

export const getAccessToken = async () => {
	const accessToken = await getItemAsync(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export const saveTokenStorage = async (accessToken: string) => {
	await setItemAsync(EnumTokens.ACCESS_TOKEN, accessToken)
}

export const saveUserStorage = async (data: IAuthResponse) => {
	await saveTokenStorage(data.accessToken)

	try {
		await AsyncStorage.setItem(EnumAsyncStorage.USER, JSON.stringify(data.name))
	} catch (e: any) {
		console.log(e.message)
	}
}

export const removeFromStorage = async () => {
	await deleteItemAsync(EnumTokens.ACCESS_TOKEN)
	await AsyncStorage.removeItem(EnumAsyncStorage.USER)
}
