import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet'
import React, { FC } from 'react'
import Animated from 'react-native-reanimated'

export const CustomBackground: FC<BottomSheetBackgroundProps> = ({ style }) => {
	return (
		<Animated.View
			pointerEvents='none'
			style={[style, { borderRadius: 12, backgroundColor: 'white' }]}
		/>
	)
}

export default CustomBackground
