import * as Font from 'expo-font'

export const loadFonts = async () => {
	await Font.loadAsync({
		'display-heavy': require('@/assets/fonts/SFProDisplay/SF-Pro-Display-Heavy.otf'),
		'display-bold': require('@/assets/fonts/SFProDisplay/SF-Pro-Display-Bold.otf'),
		'display-semi-bold': require('@/assets/fonts/SFProDisplay/SF-Pro-Display-Semibold.otf'),
		'pro-text-semi-bold': require('@/assets/fonts/SFProText/SFProText-Semibold.ttf'),
		'pro-text-regular': require('@/assets/fonts/SFProText/SFProText-Regular.ttf'),
		'pro-text-medium': require('@/assets/fonts/SFProText/SFProText-Medium.ttf')
	})
}
