import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const EighthPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-.02-4.09c-1.75 0-2.89-.84-2.89-2.11 0-.88.63-1.59 1.59-1.76v-.06c-.82-.24-1.28-.82-1.28-1.57 0-1.13 1.05-1.9 2.59-1.9 1.54 0 2.6.77 2.6 1.9 0 .75-.48 1.34-1.28 1.57v.06c.94.17 1.58.87 1.58 1.75 0 1.27-1.16 2.12-2.91 2.12Zm.01-4.34c.69 0 1.17-.43 1.17-1.03 0-.58-.48-1-1.17-1-.68 0-1.17.42-1.17 1 0 .6.49 1.03 1.17 1.03Zm.01 3.31c.8 0 1.4-.49 1.4-1.18 0-.68-.58-1.17-1.4-1.17-.81 0-1.41.5-1.41 1.17 0 .69.59 1.18 1.41 1.18Z'
				/>
			</G>
		</G>
	</Svg>
)
export default EighthPareSvg
