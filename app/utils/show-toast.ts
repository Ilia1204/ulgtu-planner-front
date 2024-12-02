import { COLORS } from '@/constants/colors.constants'
import { Easing, Notifier, NotifierComponents } from 'react-native-notifier'

export const showToast = (
	title: string,
	type: 'error' | 'success' | 'error' | 'info',
	description?: string
) => {
	Notifier.showNotification({
		title,
		description,
		duration: 2000,
		showAnimationDuration: 800,
		showEasing: Easing.bounce,
		Component: NotifierComponents.Notification,
		componentProps: {
			containerStyle: {
				backgroundColor:
					type === 'error'
						? COLORS.light.graphics.red
						: COLORS.light.graphics.green
			},
			titleStyle: {
				fontFamily: 'pro-text-regular',
				fontSize: 16,
				color: COLORS.light.background.primary
			},
			descriptionStyle: {
				fontFamily: 'pro-text-regular',
				fontSize: 16,
				color: COLORS.light.background.primary
			}
		}
	})
}
