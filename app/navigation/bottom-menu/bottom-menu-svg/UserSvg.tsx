import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const UserSvg = ({ color, size = 21 }: { color: string; size?: number }) => (
	<Svg width={size} height={size} fill='none' viewBox='0 0 17 18'>
		<Path
			fill={color}
			d='M8.5 8.73c2.2 0 4.06-1.93 4.06-4.43 0-2.44-1.87-4.3-4.06-4.3-2.19 0-4.06 1.89-4.06 4.32C4.45 6.8 6.3 8.73 8.5 8.73ZM2.23 18h12.53c1.66 0 2.24-.5 2.24-1.41 0-2.57-3.28-6.1-8.5-6.1-5.22 0-8.5 3.53-8.5 6.1C0 17.5.57 18 2.23 18Z'
		/>
	</Svg>
)
export default UserSvg
