import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const AbsentMarkSvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect width={30} height={30} fill='#8E8E93' rx={7} />
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M15 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-18a8 8 0 0 0-8 8c0 2.42 1.72 5.42 4 9 1.26 1.83 2.55 3.17 3 4a1 1 0 0 0 2 0c.45-1.83 1.74-3.17 3-4 2.28-3.58 4-6.58 4-9a8 8 0 0 0-8-8Zm0 14c-1.31-1.6-2-3.2-2-5a2 2 0 0 1 4 0c0 1.8-1.69 3.4-2 5Z'
				/>
			</G>
		</G>
	</Svg>
)
export default AbsentMarkSvg
