import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const NotificationsSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#FF2D55' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M8.97 19.68h12.04c.78 0 1.25-.42 1.25-1.06 0-.79-.72-1.48-1.4-2.13-.53-.52-.65-1.6-.75-2.61-.12-2.75-.93-4.7-2.88-5.4-.31-.99-1.13-1.76-2.24-1.76-1.11 0-1.93.77-2.25 1.76-1.94.7-2.75 2.65-2.87 5.4-.1 1.01-.22 2.09-.75 2.61-.68.65-1.4 1.34-1.4 2.13 0 .64.47 1.06 1.25 1.06Zm6.02 3.1c1.34 0 2.31-.95 2.41-2.05h-4.82c.1 1.1 1.07 2.05 2.41 2.05Z'
				/>
			</G>
		</G>
	</Svg>
)
export default NotificationsSvg
