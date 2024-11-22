import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SearchSvg = ({ color }: { color: string }) => (
	<Svg width={21} height={21} fill='none' viewBox='0 0 18 18'>
		<Path
			fill={color}
			d='M7.7 15.26c1.55 0 3.01-.47 4.23-1.26l4.28 4.25c.29.28.65.41 1.04.41.81 0 1.41-.63 1.41-1.42 0-.37-.13-.73-.4-1L14 12c.88-1.24 1.4-2.74 1.4-4.37C15.4 3.43 11.94 0 7.7 0 3.47 0 0 3.43 0 7.63c0 4.2 3.46 7.63 7.7 7.63Zm0-2.04c-3.1 0-5.65-2.52-5.65-5.59 0-3.08 2.55-5.6 5.65-5.6 3.1 0 5.65 2.52 5.65 5.6 0 3.07-2.55 5.59-5.65 5.59Z'
		/>
	</Svg>
)
export default SearchSvg
