import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const FourthPareSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#AEAEB2' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79ZM16 18.27c-.41 0-.67-.27-.67-.75v-.64H12.7c-.58 0-.94-.35-.94-.89 0-.25.06-.49.22-.79.57-.95 1.43-2.26 2.17-3.39.37-.58.76-.81 1.42-.81.65 0 1.11.41 1.11.98v3.69h.5c.39 0 .63.24.63.6s-.25.61-.63.61h-.5v.64c0 .49-.25.75-.68.75Zm-.67-2.6v-3.52h-.05c-.74 1.15-1.63 2.53-2.16 3.47v.05h2.21Z'
				/>
			</G>
		</G>
	</Svg>
)
export default FourthPareSvg
