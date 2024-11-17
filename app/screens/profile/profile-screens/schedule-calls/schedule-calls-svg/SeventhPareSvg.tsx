import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const SeventhPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-.97-4.1c-.43 0-.75-.27-.75-.67 0-.18.04-.32.13-.47l2.71-4.83v-.06H13c-.36 0-.61-.24-.61-.59 0-.36.24-.6.61-.6h3.77c.6 0 .98.37.98.88 0 .23-.05.43-.22.76l-2.78 5.07c-.21.37-.41.51-.73.51Z'
				/>
			</G>
		</G>
	</Svg>
)
export default SeventhPareSvg
