import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const LogoutSvg = () => (
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
					d='M15 22.48c4.25 0 7.78-3.52 7.78-7.78s-3.53-7.78-7.79-7.78-7.78 3.52-7.78 7.78 3.53 7.78 7.79 7.78Zm0-7.56c-.34 0-.59-.25-.59-.61v-3.29c0-.35.25-.6.59-.6.35 0 .59.25.59.6v3.29c0 .36-.24.61-.59.61Zm0 3.84c-2.22 0-4.06-1.85-4.06-4.06 0-1.1.47-2.19 1.28-2.92.58-.58 1.4.24.81.82-.58.55-.91 1.29-.91 2.1 0 1.6 1.29 2.88 2.88 2.88 1.6 0 2.88-1.28 2.88-2.88 0-.81-.33-1.55-.9-2.09-.59-.59.22-1.4.81-.83.81.74 1.27 1.83 1.27 2.92 0 2.21-1.83 4.06-4.06 4.06Z'
				/>
			</G>
		</G>
	</Svg>
)
export default LogoutSvg
