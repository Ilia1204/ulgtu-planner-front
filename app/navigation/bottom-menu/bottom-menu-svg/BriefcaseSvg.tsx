// import * as React from 'react'
// import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg'

// const BriefcaseSvg = () => (
// 	<Svg width={40} height={40} fill='none' viewBox='0 0 35 35'>
// 		<Defs>
// 			<ClipPath id='a'>
// 				<Path fill='#fff' fillOpacity={0} d='M0 0h28v28H0z' />
// 			</ClipPath>
// 		</Defs>
// 		<G clipPath='url(#a)'>
// 			<Path
// 				fill='#007AFF'
// 				d='M10.47 7.13v.86h7.05v-.86c0-.4-.27-.65-.71-.65h-5.64c-.43 0-.7.25-.7.65Zm3.52 6.18c-3.46 0-6.75-.53-9.95-1.87v-.64c0-1.85.96-2.81 2.84-2.81h1.76v-.94c0-1.41.91-2.24 2.42-2.24h5.86c1.51 0 2.42.83 2.42 2.24v.94h1.77c1.88 0 2.83.96 2.83 2.81v.64c-3.19 1.34-6.49 1.87-9.95 1.87Zm-7.11 8.88c-1.88 0-2.84-.95-2.84-2.81v-6.27c2.67.98 5.08 1.44 7.51 1.62v.69c0 .67.39 1.04 1.07 1.04h2.74c.68 0 1.07-.37 1.07-1.04v-.69c2.43-.18 4.84-.64 7.51-1.62v6.27c0 1.86-.95 2.81-2.83 2.81H6.88Z'
// 			/>
// 		</G>
// 	</Svg>
// )
// export default BriefcaseSvg

import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const BriefcaseSvg = ({ color }: { color: string }) => (
	<Svg width={22} height={22} viewBox='0 0 20 17' fill='none'>
		<Path
			fill={color}
			d='M6.43 2.32v.86h7.05v-.86c0-.4-.27-.66-.71-.66H7.13c-.43 0-.7.26-.7.66Zm3.51 6.17c-3.45 0-6.75-.52-9.94-1.86v-.64c0-1.86.96-2.81 2.83-2.81H4.6v-.94C4.6.83 5.51 0 7.02 0h5.86c1.51 0 2.42.83 2.42 2.24v.94h1.76c1.88 0 2.84.95 2.84 2.81v.64c-3.2 1.34-6.49 1.86-9.96 1.86Zm-7.11 8.89C.96 17.38 0 16.43 0 14.57V8.3c2.67.98 5.08 1.43 7.51 1.62v.69c0 .67.39 1.04 1.06 1.04h2.75c.68 0 1.07-.37 1.07-1.04v-.69c2.43-.19 4.84-.64 7.51-1.62v6.27c0 1.86-.96 2.81-2.84 2.81H2.83Z'
		/>
	</Svg>
)
export default BriefcaseSvg
