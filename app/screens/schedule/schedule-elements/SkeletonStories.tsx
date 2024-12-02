import React, { FC } from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderMedia } from 'rn-placeholder'

const SkeletonStories: FC = () => {
	return (
		<>
			<View className='ml-4 flex-row items-center'>
				{Array.from({ length: 5 }).map((_, idx) => (
					<View key={idx + Math.random()}>
						<Placeholder Animation={Fade}>
							<PlaceholderMedia
								className='rounded-xl mr-3'
								style={{ height: 120, width: 102 }}
							/>
						</Placeholder>
					</View>
				))}
			</View>
		</>
	)
}

export default SkeletonStories
