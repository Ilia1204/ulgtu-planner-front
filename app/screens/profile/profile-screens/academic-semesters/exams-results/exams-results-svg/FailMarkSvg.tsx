import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const FailMarkSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#FF3B30' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M9.16 19.32c-.32.32-.33.89 0 1.22.34.33.9.32 1.22 0l4.61-4.61 4.62 4.61c.32.33.88.33 1.21 0 .32-.34.33-.89 0-1.22l-4.61-4.61 4.61-4.61c.33-.33.33-.89 0-1.22-.34-.32-.89-.33-1.21 0l-4.62 4.61-4.61-4.61c-.32-.32-.89-.34-1.22 0-.33.33-.32.9 0 1.22l4.61 4.61-4.61 4.61Z'
				/>
			</G>
		</G>
	</Svg>
)
export default FailMarkSvg
