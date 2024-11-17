import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const SixthPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm.06-4.09c-.99 0-1.86-.37-2.38-1.21-.33-.54-.53-1.32-.53-2.37 0-2.53 1.18-3.82 3.1-3.82 1.02 0 1.87.47 2.14 1.04.06.13.1.26.1.4 0 .32-.24.54-.56.54-.31 0-.47-.14-.71-.36-.23-.25-.51-.46-1-.46-.98 0-1.64.93-1.64 2.34 0 .05 0 .09.01.14h.06c.26-.55.88-1.03 1.85-1.03 1.25 0 2.31.83 2.31 2.26 0 1.59-1.13 2.53-2.75 2.53Zm-.07-1.12c.81 0 1.34-.54 1.34-1.35 0-.78-.55-1.32-1.33-1.32-.79 0-1.34.55-1.34 1.31 0 .78.55 1.36 1.33 1.36Z'
				/>
			</G>
		</G>
	</Svg>
)
export default SixthPareSvg
