import { COLORS } from '@/constants/colors.constants'
import React, { FC } from 'react'
import { ViewStyle } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import ProTextSemiBold from '../custom-texts/ProTextSemiBold'

interface IButtonBackground {
	input?: string
	onPress: () => void
	buttonText: string
	className?: string
	styles?: ViewStyle
	disabled?: boolean
}

const ButtonBackground: FC<IButtonBackground> = props => {
	const {
		input,
		onPress,
		buttonText,
		className,
		styles,
		disabled = false,
		...rest
	} = props

	return (
		<TouchableRipple
			className={`rounded-2xl mx-4 ${className}`}
			{...rest}
			style={[
				{ paddingVertical: 18, ...styles },
				!disabled
					? { backgroundColor: COLORS.light.graphics.blue }
					: { backgroundColor: COLORS.light.background.secondary }
			]}
			onPress={onPress}
			disabled={disabled}
			borderless={true}
			rippleColor='rgba(255, 255, 255, 0.3)'
		>
			<ProTextSemiBold
				style={{ fontSize: 17 }}
				className={`text-center ${!disabled ? 'text-light-background-primary' : 'text-light-label-secondary opacity-60'}`}
				text={buttonText}
			/>
		</TouchableRipple>
	)
}

export default ButtonBackground
