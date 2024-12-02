import React, { FC } from 'react'
import { View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'
import { schedulesStyles } from '../utils/schedules.styles'

const SkeletonSchedule: FC = () => {
	return (
		<>
			{Array.from({ length: 2 }).map((_, idx) => (
				<View key={idx + Math.random()}>
					<PlaceholderLine
						width={55}
						height={14}
						noMargin
						className='mx-5 my-3.5'
					/>
					{Array.from({ length: 4 }).map((_, idx) => (
						<Placeholder
							key={idx + Math.random()}
							Animation={Fade}
							className='bg-white gap-x-3'
						>
							<View className='flex-row pb-5'>
								<View
									className='self-start items-center py-4'
									style={{ width: 65 }}
								>
									<PlaceholderLine
										width={55}
										height={14}
										noMargin
										className='mb-2'
									/>
									<PlaceholderLine width={40} height={12} noMargin />
									<PlaceholderLine
										width={40}
										height={8}
										noMargin
										className='mt-2'
									/>
								</View>
								<View style={{ ...schedulesStyles.verticalLine }} />
								<View className='flex-1 pr-3.5 pl-3 pt-4 gap-y-3'>
									<PlaceholderLine width={70} height={12} noMargin />
									<PlaceholderLine width={90} height={12} noMargin />
									<PlaceholderLine width={100} height={12} noMargin />
								</View>
							</View>
						</Placeholder>
					))}
				</View>
			))}
		</>
	)
}

export default SkeletonSchedule
