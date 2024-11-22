import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ClearSearchSvg = () => (
	<Svg width={20} height={20} fill='none' viewBox='0 0 17 17'>
		<Path
			fill='#8E8E93'
			fillRule='evenodd'
			d='M8.5 17a8.5 8.5 0 1 0 0-17C3.8 0 0 3.8 0 8.5A8.5 8.5 0 0 0 8.5 17Zm3.76-12.27c.31.31.31.82 0 1.13L9.63 8.5l2.63 2.63c.31.31.31.82 0 1.13-.31.31-.82.31-1.13 0L8.5 9.63l-2.64 2.63c-.31.31-.82.31-1.13 0a.803.803 0 0 1 0-1.13L7.36 8.5 4.73 5.86a.803.803 0 0 1 0-1.13c.31-.31.82-.31 1.13 0L8.5 7.36l2.63-2.63c.31-.31.82-.31 1.13 0Z'
		/>
	</Svg>
)
export default ClearSearchSvg
