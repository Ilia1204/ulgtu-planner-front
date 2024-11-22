import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ChatSvg = ({ color }: { color: string }) => (
	<Svg width={22.5} height={22.5} fill='none' viewBox='0 0 25 20'>
		<Path
			fill={color}
			d='M5.61 19.1c.37 0 .65-.17 1.09-.58l2.49-2.28c-.49-.4-.92-1.07-.92-2.43V7.62c0-2.76 1.7-4.43 4.47-4.43h6.33l-.01-.27C18.9 1.17 17.74 0 15.65 0H3.43C1.32 0 0 1.23 0 3.37v8.81c0 2.11 1.3 3.42 3.37 3.42h1.41v2.54c0 .58.3.96.83.96Zm14.81 1.27c.54 0 .84-.38.84-.96v-2.55h.91c2.07 0 3.37-1.3 3.37-3.42V7.85c0-2.14-1.32-3.37-3.43-3.37H13c-2.19 0-3.43 1.22-3.43 3.41v5.55c0 2.14 1.25 3.42 3.43 3.42h3.1l3.24 2.93c.44.4.71.58 1.08.58Z'
		/>
	</Svg>
)
export default ChatSvg
