import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

const ArrowRightSvg = () => (
	<Svg width={20} height={20} fill='none'>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' fillOpacity={0} d='M0 0h20v20H0z' />
			</ClipPath>
		</Defs>
		<G clipPath='url(#a)'>
			<Path
				fill='#AEAEB2'
				d='m8.37 4.85 4.89 4.77c.17.17.26.36.26.58 0 .22-.09.42-.26.58l-4.89 4.78c-.14.13-.31.21-.52.21-.42 0-.74-.33-.74-.74 0-.2.08-.4.22-.54l4.4-4.28-4.4-4.3a.755.755 0 0 1-.22-.54c0-.41.32-.74.74-.74.2 0 .38.08.52.22Z'
			/>
		</G>
	</Svg>
)
export default ArrowRightSvg
