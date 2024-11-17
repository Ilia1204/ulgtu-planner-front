import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import React, { FC } from 'react'
import { Alert, Linking, StatusBar, View } from 'react-native'
import DashBoardItem from './dashboard/dashboard-item/DashBoardItem'
import { dashboardData } from './dashboard/dashboard.data'
import MainInfo from './profile-elements/MainInfo'
import SkeletonProfile from './profile-screens/SkeletonProfile'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { data, logout, isLoading } = useProfile()
	const { navigate } = useTypedNavigation()

	const flowId = data?.studentInfo.group.flow.id

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<StatusBar backgroundColor={COLORS.light.background.tertiary} />
			<View
				className='h-12 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5 }}
			/>
			{isLoading ? <SkeletonProfile /> : <MainInfo data={data} />}
			<View className='bg-white mt-5 px-5'>
				{dashboardData.slice(0, 4).map((item, idx) => (
					<DashBoardItem
						item={item}
						key={item.name}
						array={dashboardData}
						idx={idx}
						onPress={() =>
							item.name === 'Уведомления'
								? Linking.openSettings()
								: navigate(item.path as any)
						}
					/>
				))}
			</View>
			<View className='bg-white mt-5 px-5'>
				{dashboardData.slice(4, 6).map((item, idx) => (
					<DashBoardItem
						key={item.name}
						item={item}
						array={dashboardData}
						idx={idx}
						onPress={() =>
							item.name === 'FAQ'
								? Alert.alert(
										'Внимание',
										'Данный раздел находится в разработке'
									)
								: navigate(item.path as any)
						}
					/>
				))}
			</View>
			<View className='bg-white mt-5 px-5'>
				{dashboardData.slice(6, 8).map((item, idx) => (
					<DashBoardItem
						item={item}
						key={item.name}
						array={dashboardData}
						idx={idx}
						onPress={() =>
							item.name === 'Выйти'
								? Alert.alert(
										'Выйти?',
										'Вы уверены, что хотите выйти из приложения',
										[
											{ text: 'Отменить' },
											{ text: 'Выйти', onPress: () => logout() }
										]
									)
								: navigate(item.path as any)
						}
					/>
				))}
			</View>
		</View>
	)
}

export default Profile
