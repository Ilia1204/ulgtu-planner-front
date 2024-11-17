import * as React from 'react'
import { ViewStyle } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

const CyanCircleSvg = ({ style }: { style: ViewStyle }) => (
	<Svg width={102} height={102} fill='none' className='absolute' style={style}>
		<Circle cx={51} cy={51} r={51} fill='#5AC8FA' />
	</Svg>
)
export default CyanCircleSvg
