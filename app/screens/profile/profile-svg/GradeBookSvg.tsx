import { COLORS } from '@/constants/colors.constants'
import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const GradeBookSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill={COLORS.light.graphics.blue} rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M11.21 20.76c1.31 0 2.23.47 2.63.75.15.07.52.31.62.33V9.32c-.56-.98-2.11-1.75-3.68-1.75-2.09 0-3.79 1.18-4.24 2.07v11.38c.01.67.39.94.85.94.35 0 .57-.12.8-.3.48-.39 1.59-.9 3.02-.9Zm7.57 0c1.43 0 2.53.51 3.01.9.23.18.45.3.79.3.47 0 .86-.27.86-.94V9.64c-.44-.89-2.15-2.07-4.23-2.07-1.57 0-3.12.77-3.68 1.75v12.54c.09-.03.47-.27.62-.35.4-.28 1.32-.75 2.63-.75Z'
				/>
			</G>
		</G>
	</Svg>
)
export default GradeBookSvg
