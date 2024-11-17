import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const ChangePassSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#C7C7CC' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M11.34 21.95h7.31c1.01 0 1.51-.49 1.51-1.59v-5.65c0-.99-.41-1.5-1.26-1.58v-1.86c0-2.86-1.9-4.24-3.9-4.24-2.01 0-3.91 1.38-3.91 4.24v1.88c-.79.12-1.26.62-1.26 1.56v5.65c0 1.1.5 1.59 1.51 1.59Zm1.19-10.82c0-1.75 1.12-2.72 2.47-2.72 1.34 0 2.46.97 2.46 2.72v1.99h-4.93v-1.99Z'
				/>
			</G>
		</G>
	</Svg>
)
export default ChangePassSvg
