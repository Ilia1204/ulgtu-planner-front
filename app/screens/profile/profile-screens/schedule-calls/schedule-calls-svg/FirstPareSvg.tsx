import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const FirstPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm.43-4.23c-.47 0-.76-.29-.76-.83v-4.72h-.06l-.93.61c-.2.14-.29.16-.43.16-.3 0-.53-.26-.53-.55 0-.25.1-.4.31-.54l1.35-.92c.38-.25.64-.34.99-.34.52 0 .84.31.84.83v5.47c0 .54-.29.83-.78.83Z'
				/>
			</G>
		</G>
	</Svg>
)
export default FirstPareSvg
