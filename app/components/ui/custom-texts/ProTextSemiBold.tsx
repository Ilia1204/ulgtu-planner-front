import React, { FC, PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

interface IProTextSemiBold {
	style?: TextStyle
	className?: string
	numberOfLines?: number
	text: string | undefined
}

const ProTextSemiBold: FC<PropsWithChildren<IProTextSemiBold>> = props => {
	const { style, className, numberOfLines, children, text, ...rest } = props

	return (
		<Text
			style={[
				style,
				{ fontFamily: 'pro-text-semi-bold', letterSpacing: -0.41 }
			]}
			className={className}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{text}
		</Text>
	)
}

export default ProTextSemiBold
