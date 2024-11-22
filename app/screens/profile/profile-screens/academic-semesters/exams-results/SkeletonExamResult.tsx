import React, { FC } from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

const SkeletonExamResult: FC = () => {
	return (
		<Placeholder
			Animation={Fade}
			style={{ paddingVertical: 21 }}
			className='pt-0'
		>
			{Array.from({ length: 7 }).map((_, idx) => (
				<View
					className='flex-row items-center justify-between py-3 pl-3 mb-3.5 bg-white'
					key={idx}
				>
					<View>
						<PlaceholderLine
							width={600}
							height={12}
							className='mx-2'
							noMargin
						/>
						<PlaceholderLine
							width={1500}
							height={12}
							className='ml-2 my-2'
							noMargin
						/>
						<PlaceholderLine
							width={800}
							height={12}
							className='ml-2'
							noMargin
						/>
					</View>
					<PlaceholderLine
						width={5}
						className='rounded-full absolute right-6 top-3 bg-white'
						height={12}
					/>
				</View>
			))}
		</Placeholder>
	)
}

export default SkeletonExamResult
