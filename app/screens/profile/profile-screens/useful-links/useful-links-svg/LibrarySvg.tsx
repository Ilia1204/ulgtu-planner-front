import * as React from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const LibrarySvg = () => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='a'>
				<Path fill='#fff' fillOpacity={0} d='M0 0h24v24H0z' />
			</ClipPath>
		</Defs>
		<Rect width='30' height='30' fill='#000' rx={7} />
		<G clipPath='url(#a)' transform='translate(3, 3)'>
			<Path
				fill='#FFF'
				d='M9.39 7.63h5.32c.93 0 1.37-.43 1.37-1.32v-2.2c0-.9-.44-1.32-1.37-1.32H9.39c-.92 0-1.37.42-1.37 1.32v2.2c0 .89.45 1.32 1.37 1.32ZM7.35 20.18c.4 0 .58-.21.69-.59l.62-2.35h6.7l.62 2.35c.11.38.31.59.69.59.45 0 .7-.28.7-.67 0-.08-.01-.18-.04-.27l-1.18-4.47h.48c.53 0 .92-.36.92-.83 0-.51-.36-.86-.89-.86H8.02c-.64 0-1-.33-1-.95v-1.95h1.02v.54c0 .87.44 1.3 1.33 1.3h5.34c.89 0 1.34-.43 1.34-1.3v-.54h2.63c.46 0 .76-.3.76-.7 0-.43-.3-.71-.73-.71H5.25c-.42 0-.71.29-.71.71 0 .4.31.7.74.7h.47v2.93c0 1.05.64 1.66 1.69 1.66h.43l-1.18 4.47c-.01.09-.04.17-.04.27 0 .38.23.67.7.67Zm1.67-4.28.29-1.13h5.4L15 15.9H9.02Z'
			/>
		</G>
	</Svg>
)
export default LibrarySvg
