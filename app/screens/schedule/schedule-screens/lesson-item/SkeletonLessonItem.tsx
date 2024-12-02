import React, { FC } from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'

const SkeletonLessonItem: FC = () => {
	return (
		<>
			<Placeholder Animation={Fade} className='bg-white px-4'>
				<View className='py-4'>
					<PlaceholderLine width={45} height={12} noMargin />
					<PlaceholderLine
						width={90}
						height={14}
						noMargin
						className='mt-3.5 mb-1'
					/>
				</View>
				{Array.from({ length: 3 }).map((_, idx) => (
					<View
						className='flex-row justify-between items-center py-3'
						key={idx + Math.random()}
					>
						<PlaceholderLine width={50} height={12} />
						<PlaceholderLine width={5} height={12} />
					</View>
				))}
				<PlaceholderLine width={45} height={12} />
				<PlaceholderLine width={50} height={12} noMargin className='mb-4' />
			</Placeholder>
			<Placeholder Animation={Fade} className='mx-4 my-3.5 mb-0'>
				<PlaceholderLine width={25} height={14} />
			</Placeholder>
			<View className='gap-y-1'>
				{Array.from({ length: 2 }).map((_, idx) => (
					<Placeholder
						Animation={Fade}
						className='bg-white px-4'
						key={idx + Math.random()}
					>
						<View className='py-4'>
							<PlaceholderLine width={60} height={12} noMargin />
						</View>
					</Placeholder>
				))}
			</View>
			<Placeholder Animation={Fade} className='mx-4 my-3.5 mb-0'>
				<PlaceholderLine width={25} height={14} />
			</Placeholder>
			<View className='gap-y-1'>
				{Array.from({ length: 2 }).map((_, idx) => (
					<Placeholder
						Animation={Fade}
						className='bg-white px-4'
						key={idx + Math.random()}
					>
						<View className='py-4'>
							<PlaceholderLine width={60} height={12} noMargin />
						</View>
					</Placeholder>
				))}
			</View>
		</>
	)
}

export default SkeletonLessonItem
