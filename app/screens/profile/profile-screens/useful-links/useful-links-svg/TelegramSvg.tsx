import React from 'react'
import { Path, Rect, Svg } from 'react-native-svg'

const TelegramSvg = () => {
	return (
		<Svg width='30' height='30' viewBox='0 0 30 30' fill='none'>
			<Rect
				x='0.5'
				y='0.5'
				width='29'
				height='29'
				rx='7'
				fill='#29b6f6'
				stroke='#29b6f6'
			/>
			<Path
				fill='#c8daea'
				d='M199 404c-11 0-10-4-13-14l-32-105 245-144'
				transform='scale(0.055)'
			/>
			<Path
				fill='#a9c9dd'
				d='M199 404c7 0 11-4 16-8l45-43-56-34'
				transform='scale(0.055)'
			/>
			<Path
				fill='#f6fbfe'
				d='M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4'
				transform='scale(0.055)'
			/>
		</Svg>
	)
}

export default TelegramSvg
