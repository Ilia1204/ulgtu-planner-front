import React, { FC, PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

interface IProTextRegular {
	style?: TextStyle
	className?: string
	numberOfLines?: number
	text: string | undefined
}

const ProTextRegular: FC<PropsWithChildren<IProTextRegular>> = props => {
	const { style, className, numberOfLines, children, text, ...rest } = props

	return (
		<Text
			style={[
				style,
				{ fontFamily: 'pro-text-regular', letterSpacing: -0.24, ...style }
			]}
			className={className}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{text}
		</Text>
	)
}

export default ProTextRegular
