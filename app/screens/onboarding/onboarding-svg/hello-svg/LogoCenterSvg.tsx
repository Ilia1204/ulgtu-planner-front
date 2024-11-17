import { COLORS } from '@/constants/colors.constants'
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

const LogoCenterSvg = () => (
	<Svg
		width={84}
		height={84}
		fill='none'
		className='absolute'
		style={{ top: 71, right: 68, left: 72, zIndex: 20 }}
	>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' fillOpacity={0} d='M0 0h84v84H0z' />
			</ClipPath>
		</Defs>
		<G clipPath='url(#a)'>
			<Path
				fill={COLORS.light.graphics.blue}
				fillRule='evenodd'
				d='M80.61 34.71c0-1.5-.82-2.87-2.14-3.58L40.91 10.98a4.025 4.025 0 0 0-3.84 0L4.04 28.7c-2.85 1.53-2.85 5.63 0 7.16l33.03 17.72c1.2.64 2.65.64 3.84 0l33.46-17.95c.45-.24 1 .08 1 .59v16a5.92 5.92 0 0 0 2.7 11.19c3.27 0 5.93-2.65 5.93-5.92 0-2.37-1.39-4.41-3.39-5.36V34.71ZM64.37 51.15c0-1.53-1.64-2.51-2.99-1.79L40.91 60.35a4.08 4.08 0 0 1-3.84 0L16.78 49.46c-1.36-.73-2.99.25-2.99 1.78v9.75c0 1.49.82 2.87 2.14 3.57l19.22 10.32a8.104 8.104 0 0 0 7.68 0l19.4-10.41c1.32-.7 2.14-2.08 2.14-3.57v-9.75Z'
			/>
		</G>
	</Svg>
)
export default LogoCenterSvg
