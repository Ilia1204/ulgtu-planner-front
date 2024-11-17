import React, { FC } from 'react'
import { View } from 'react-native'
import {
	Placeholder,
	Fade,
	PlaceholderLine,
	PlaceholderMedia
} from 'rn-placeholder'

const SkeletonProfile: FC = () => {
	return (
		<Placeholder
			Animation={Fade}
			style={{ paddingVertical: 21 }}
			className='bg-white'
		>
			<View className='flex-row items-center justify-between ml-3'>
				<View>
					<PlaceholderLine width={700} height={12} className='mx-2' noMargin />
					<PlaceholderLine
						width={1200}
						height={12}
						className='mt-4 ml-2'
						noMargin
					/>
					<PlaceholderLine
						width={850}
						height={12}
						className='mt-2.5 ml-2'
						noMargin
					/>
				</View>
				<PlaceholderMedia
					className='rounded-full mr-5'
					style={{ width: 64, aspectRatio: 1 }}
				/>
			</View>
		</Placeholder>
	)
}

export default SkeletonProfile
