import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const UsefulLinksSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#34C759' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='m14.64 17.83 1.15-1.17c-.89-.08-1.53-.37-1.99-.83-1.27-1.27-1.27-3.07 0-4.33l2.5-2.51c1.27-1.27 3.06-1.27 4.34 0 1.28 1.28 1.26 3.07.01 4.34l-1.29 1.27c.25.56.33 1.24.19 1.82l2.16-2.14c1.85-1.85 1.86-4.49-.01-6.35-1.88-1.88-4.5-1.86-6.35-.01l-2.62 2.62c-1.86 1.85-1.86 4.48.01 6.35.43.45 1.03.78 1.9.94Zm.7-6.37-1.15 1.17c.89.08 1.53.37 1.99.83 1.28 1.27 1.27 3.07.01 4.34l-2.51 2.5c-1.27 1.27-3.06 1.27-4.33 0-1.28-1.28-1.27-3.07 0-4.34l1.27-1.28a3.06 3.06 0 0 1-.19-1.82l-2.15 2.16c-1.86 1.84-1.87 4.47 0 6.34 1.88 1.87 4.5 1.86 6.35.01l2.63-2.62c1.85-1.86 1.86-4.49-.01-6.36-.44-.43-1.03-.76-1.91-.93Z'
				/>
			</G>
		</G>
	</Svg>
)
export default UsefulLinksSvg
