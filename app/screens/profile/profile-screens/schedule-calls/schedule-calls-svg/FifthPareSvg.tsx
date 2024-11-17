import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const FifthPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-.06-4.09c-1.29 0-2.22-.49-2.52-1.27a.872.872 0 0 1-.09-.4c0-.34.25-.58.64-.58.29 0 .48.12.63.34.25.45.73.73 1.32.73.76 0 1.34-.56 1.34-1.32s-.49-1.27-1.22-1.27c-.37 0-.65.11-.98.39-.3.2-.49.27-.81.27-.53 0-.83-.32-.79-.85l.19-2.44c.03-.5.4-.83.95-.83h3.24c.36 0 .58.23.58.58 0 .33-.23.56-.58.56h-3l-.16 1.91h.07c.27-.39.92-.67 1.57-.67 1.42 0 2.4.94 2.4 2.32 0 1.53-1.12 2.53-2.78 2.53Z'
				/>
			</G>
		</G>
	</Svg>
)
export default FifthPareSvg
