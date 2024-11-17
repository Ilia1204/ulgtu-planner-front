import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const LibraryCardSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#5AC8FA' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M16.44 22.87h1.88c.76 0 1.16-.42 1.16-1.16V11.56l1.14 10.32c.08.74.51 1.11 1.26 1.02l2.36-.31c.74-.09 1.09-.53 1.02-1.27L23.91 9.2c-.07-.74-.51-1.12-1.25-1.03l-2.37.32c-.37.04-.64.17-.81.38v-1.6c0-.74-.4-1.15-1.16-1.15h-1.88c-.74 0-1.14.41-1.14 1.15v14.44c0 .74.4 1.16 1.14 1.16Zm-10.58 0h1.25c.76 0 1.16-.42 1.16-1.16V9.4c0-.74-.4-1.16-1.16-1.16H5.86c-.75 0-1.15.42-1.15 1.16v12.31c0 .74.4 1.16 1.15 1.16Zm4.45 0h2.94c.75 0 1.15-.42 1.15-1.16v-9.64c0-.74-.4-1.15-1.15-1.15h-2.94c-.75 0-1.15.41-1.15 1.15v9.64c0 .74.4 1.16 1.15 1.16Zm.59-9.13a.5.5 0 0 1-.51-.51c0-.28.22-.5.51-.5h1.77c.29 0 .51.22.51.5a.5.5 0 0 1-.51.51H10.9Zm0 7.32a.5.5 0 0 1-.51-.51c0-.28.22-.5.51-.5h1.77c.29 0 .51.22.51.5a.5.5 0 0 1-.51.51H10.9Z'
				/>
			</G>
		</G>
	</Svg>
)
export default LibraryCardSvg
