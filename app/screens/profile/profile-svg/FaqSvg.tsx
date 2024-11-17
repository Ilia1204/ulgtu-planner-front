import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const FaqSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#5856D6' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M14.99 22.49c4.27 0 7.79-3.53 7.79-7.79 0-4.27-3.53-7.79-7.8-7.79-4.26 0-7.78 3.52-7.78 7.79 0 4.26 3.52 7.79 7.79 7.79Zm-.18-6.24c-.49 0-.76-.23-.76-.68v-.08c0-.71.4-1.11.96-1.5.66-.46.99-.71.99-1.19 0-.52-.4-.87-1.02-.87-.45 0-.78.23-1.03.61-.24.28-.36.51-.81.51-.37 0-.67-.24-.67-.62 0-.15.03-.29.08-.42.25-.74 1.16-1.34 2.51-1.34 1.4 0 2.58.74 2.58 2.05 0 .91-.5 1.36-1.28 1.87-.5.32-.78.59-.81 1v.09c-.03.32-.31.57-.74.57Zm-.01 2.41c-.51 0-.93-.37-.93-.87 0-.49.41-.86.93-.86.51 0 .93.37.93.86 0 .51-.43.87-.93.87Z'
				/>
			</G>
		</G>
	</Svg>
)
export default FaqSvg
