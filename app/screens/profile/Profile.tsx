import MainHeader from '@/components/ui/headers/MainHeader'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import React, { FC } from 'react'
import { Alert, Linking, View } from 'react-native'
import DashBoardItem from './dashboard/dashboard-item/DashBoardItem'
import { dashboardData } from './dashboard/dashboard.data'
import MainInfo from './profile-elements/MainInfo'
import SkeletonProfile from './profile-screens/useful-links/SkeletonProfile'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { data, logout, isLoading } = useProfile()
	const { navigate } = useTypedNavigation()

	const renderItemsFirst = (start: number, end: number) => {
		return dashboardData
			.slice(start, end)
			.map((item, idx, array) => (
				<DashBoardItem
					item={item}
					key={item.name}
					array={array}
					idx={idx}
					onPress={() =>
						item.name === 'Уведомления'
							? Linking.openSettings()
							: navigate(item.path as any)
					}
				/>
			))
	}

	const renderItemsSecond = (start: number, end: number) => {
		return dashboardData
			.slice(start, end)
			.map((item, idx, array) => (
				<DashBoardItem
					key={item.name}
					item={item}
					array={array}
					idx={idx}
					onPress={() =>
						item.name === 'FAQ'
							? Alert.alert(
									'Внимание',
									'Данный раздел находится в разработке',
									[{ text: 'ОК' }],
									{ cancelable: true }
								)
							: navigate(item.path as any)
					}
				/>
			))
	}

	const renderItemsThird = (start: number, end: number) => {
		return dashboardData.slice(start, end).map((item, idx, array) => {
			return (
				<DashBoardItem
					item={item}
					key={item.name}
					array={array}
					idx={idx}
					onPress={() =>
						item.name === 'Выйти'
							? Alert.alert(
									'Выйти?',
									'Вы уверены, что хотите выйти из приложения',
									[
										{ text: 'Отменить' },
										{ text: 'Выйти', onPress: () => logout() }
									],
									{ cancelable: true }
								)
							: navigate(item.path as any)
					}
				/>
			)
		})
	}

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<MainHeader isHasContent={false} />
			{isLoading ? <SkeletonProfile /> : <MainInfo data={data} />}
			<View className='bg-white mt-5 px-5'>{renderItemsFirst(0, 4)}</View>
			<View className='bg-white mt-5 px-5'>{renderItemsSecond(4, 6)}</View>
			<View className='bg-white mt-5 px-5'>{renderItemsThird(6, 8)}</View>
		</View>
	)
}

export default Profile
