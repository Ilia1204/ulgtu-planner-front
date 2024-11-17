import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const SecondPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-1.78-4.27c-.41 0-.66-.24-.66-.61 0-.21.07-.4.28-.6l2.37-2.44c.48-.48.89-.93.89-1.43 0-.57-.42-.94-1.07-.94-.67 0-1.03.45-1.23.86-.14.24-.31.43-.64.43-.38 0-.63-.23-.63-.6 0-.11.01-.23.05-.35.27-.88 1.28-1.54 2.44-1.54 1.5 0 2.49.81 2.49 2.01 0 .85-.46 1.46-1.22 2.21l-1.62 1.71v.05h2.52c.39 0 .66.23.66.62 0 .38-.27.62-.66.62h-3.97Z'
				/>
			</G>
		</G>
	</Svg>
)
export default SecondPareSvg
