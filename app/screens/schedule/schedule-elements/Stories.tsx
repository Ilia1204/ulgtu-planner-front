import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import React, { FC } from 'react'
import { Image, Pressable, ScrollView, View } from 'react-native'
import { useClassesByUser } from '../hooks/useClassesByUser'
import { stories } from '../stories.data'
import SkeletonStories from './SkeletonStories'

const Stories: FC = () => {
	const { isFetching } = useClassesByUser()

	return (
		<ScrollView
			className='mt-3.5'
			horizontal
			showsHorizontalScrollIndicator={false}
		>
			<View className='flex-row items-center'>
				{isFetching ? (
					<SkeletonStories />
				) : (
					<>
						{stories.map((story, idx) => (
							<Pressable
								style={{ height: 120, width: 102 }}
								key={idx}
								className={idx === stories.length - 1 ? 'mx-3' : 'ml-3'}
							>
								<Image
									source={story.image}
									style={{ height: 120, width: 102 }}
									resizeMode='contain'
								/>
								<ProTextMedium
									text={story.name}
									className='absolute z-50 text-white bottom-3 text-xs pl-2.5 pr-1'
									numberOfLines={2}
								/>
							</Pressable>
						))}
					</>
				)}
			</View>
		</ScrollView>
	)
}

export default Stories
