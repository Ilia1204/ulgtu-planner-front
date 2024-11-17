import { ProTextRegular } from '@/components'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import ArrowRightSvg from '../../profile-svg/common/ArrowRight'
import type { IDashBoardItem } from './dashboard-item.interface'

const DashBoardItem: FC<IDashBoardItem> = props => {
	const { onPress, item, idx, array, notificationsEnabled } = props

	return (
		<Pressable
			className='flex-row items-center w-full'
			key={item.name}
			onPress={onPress}
		>
			<item.icon />
			<View
				className='flex-row items-center justify-between w-full pr-12 ml-4 py-3'
				style={{
					borderBottomWidth: idx !== array.length - 1 ? 0.5 : 0,
					borderBottomColor: 'rgba(60, 60, 67, 0.13)'
				}}
			>
				<ProTextRegular text={item.name} className='text-base' />
				<View className='flex-row items-center'>
					{idx === 3 && (
						<ProTextRegular
							text={notificationsEnabled ? 'Вкл.' : 'Выкл.'}
							className='text-base mr-1 text-light-graphics-gray2'
						/>
					)}
					<ArrowRightSvg />
				</View>
			</View>
		</Pressable>
	)
}

export default DashBoardItem
