import * as React from 'react'
import { ViewStyle } from 'react-native'
import Svg, { Rect } from 'react-native-svg'

const PurpleRectSvg = ({ style }: { style: ViewStyle }) => (
	<Svg
		width={14.513}
		height={14.457}
		fill='none'
		className='absolute'
		style={style}
	>
		<Rect
			width={12}
			height={12}
			x={-1.245}
			y={7.229}
			fill='#5856D6'
			rx={3}
			transform='rotate(-44.892 -1.245 7.229)'
		/>
	</Svg>
)
export default PurpleRectSvg
