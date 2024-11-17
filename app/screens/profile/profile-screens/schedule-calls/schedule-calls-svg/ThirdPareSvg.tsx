import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const ThirdPareSvg = () => (
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
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-.03-4.09c-1.3 0-2.35-.61-2.59-1.49-.03-.12-.05-.2-.05-.33 0-.37.26-.62.66-.62.29 0 .49.13.62.42.2.48.63.83 1.39.83.79 0 1.32-.39 1.32-1s-.52-1.03-1.31-1.03h-.44c-.36 0-.61-.24-.61-.57 0-.36.25-.58.61-.58h.4c.67 0 1.14-.41 1.14-.99 0-.54-.42-.88-1.11-.88-.64 0-1.09.32-1.27.84-.12.28-.31.42-.62.42-.39 0-.65-.24-.65-.61 0-.12.01-.22.04-.34.24-.91 1.21-1.47 2.52-1.47 1.48 0 2.52.77 2.52 1.88 0 .79-.61 1.5-1.38 1.61v.07c.92.09 1.61.82 1.61 1.72 0 1.25-1.07 2.12-2.8 2.12Z'
				/>
			</G>
		</G>
	</Svg>
)
export default ThirdPareSvg
