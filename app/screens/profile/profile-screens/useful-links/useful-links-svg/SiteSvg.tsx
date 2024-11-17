import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const SiteSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#007AFF' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M7.04 15.79h4.38c.13 2.54.94 4.99 2.34 7.11a8.041 8.041 0 0 1-4.58-2.41 7.949 7.949 0 0 1-2.14-4.7Zm0-1.6c.17-1.76.93-3.41 2.14-4.69a8.041 8.041 0 0 1 4.58-2.41 14.21 14.21 0 0 0-2.34 7.1H7.04Zm15.92 0h-4.39a14.21 14.21 0 0 0-2.34-7.1c1.75.28 3.36 1.12 4.58 2.41a8.021 8.021 0 0 1 2.15 4.69Zm0 1.6a8.021 8.021 0 0 1-2.15 4.7 8.041 8.041 0 0 1-4.58 2.41c1.4-2.12 2.21-4.57 2.34-7.11h4.39Zm-9.94 0h3.95c-.13 2.16-.81 4.25-1.97 6.08a12.696 12.696 0 0 1-1.98-6.08Zm0-1.6c.13-2.15.81-4.24 1.98-6.07a12.79 12.79 0 0 1 1.97 6.07h-3.95Z'
				/>
			</G>
		</G>
	</Svg>
)
export default SiteSvg
