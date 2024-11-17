import React, { FC, PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

interface IProTextMedium {
	style?: TextStyle
	className?: string
	numberOfLines?: number
	text: string
}

const ProTextMedium: FC<PropsWithChildren<IProTextMedium>> = props => {
	const { style, className, numberOfLines, children, text, ...rest } = props

	return (
		<Text
			style={[style, { fontFamily: 'pro-text-medium' }]}
			className={className}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{text}
		</Text>
	)
}

export default ProTextMedium
