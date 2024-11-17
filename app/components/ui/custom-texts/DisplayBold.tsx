import React, { FC, PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'

interface IDisplayBold {
	styles?: TextStyle
	className?: string
	numberOfLines?: number
	text: string
}

const DisplayBold: FC<PropsWithChildren<IDisplayBold>> = props => {
	const { styles, className, numberOfLines, children, text, ...rest } = props

	return (
		<Text
			style={[
				styles,
				{ fontFamily: 'display-bold', fontSize: 27, letterSpacing: 0.35 }
			]}
			className={className}
			numberOfLines={numberOfLines}
			{...rest}
		>
			{text}
		</Text>
	)
}

export default DisplayBold
