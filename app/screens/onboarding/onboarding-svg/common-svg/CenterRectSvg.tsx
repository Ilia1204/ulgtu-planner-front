import * as React from 'react'
import Svg, { Defs, G, Rect } from 'react-native-svg'

const CenterRectSvg = () => (
	<Svg
		width={230}
		height={230}
		fill='none'
		style={{
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2
			},
			shadowOpacity: 0.25,
			shadowRadius: 3.84
		}}
	>
		<Defs></Defs>
		<G filter='url(#a)'>
			<Rect
				width={142}
				height={142}
				x={43}
				y={43}
				fill='#fff'
				rx={32}
				fillOpacity={1}
			/>
		</G>
	</Svg>
)
export default CenterRectSvg
