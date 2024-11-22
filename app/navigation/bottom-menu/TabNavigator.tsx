import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { COLORS } from '@/constants/colors.constants'
import { Chat, Search } from '@/screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { View } from 'react-native'
import ProfileStack from '../stacks/profile-stack/ProfileStack'
import ScheduleStack from '../stacks/schedule-stack/ScheduleStack'
import BriefcaseSvg from './bottom-menu-svg/BriefcaseSvg'
import ChatSvg from './bottom-menu-svg/ChatSvg'
import SearchSvg from './bottom-menu-svg/SearchSvg'
import UserSvg from './bottom-menu-svg/UserSvg'
import { tabNavStyles } from './tab-navigator.styles'

const Tab = createBottomTabNavigator()

const TabNavigator: FC = () => (
	<Tab.Navigator
		screenOptions={{
			headerShown: false,
			tabBarActiveTintColor: COLORS.light.graphics.blue,
			tabBarInactiveTintColor: COLORS.light.graphics.gray,
			tabBarStyle: {
				backgroundColor: COLORS.light.background.quaternary,
				elevation: 0,
				height: 70,
				paddingBottom: 7,
				borderTopColor: '#3c3c4321',
				borderTopWidth: 0.5
			},
			tabBarLabelStyle: { display: 'none' }
		}}
		initialRouteName='ScheduleStack'
	>
		<Tab.Screen
			name='ScheduleStack'
			component={ScheduleStack}
			options={{
				tabBarIcon: ({ color }) => (
					<View className='items-center justify-center'>
						<BriefcaseSvg color={color} />
						<ProTextMedium
							text='Расписание'
							style={{ color, ...tabNavStyles.tabScreen }}
						/>
					</View>
				)
			}}
		/>
		<Tab.Screen
			name='Chat'
			component={Chat}
			options={{
				tabBarIcon: ({ color }) => (
					<View className='items-center justify-center'>
						<ChatSvg color={color} />
						<ProTextMedium
							text='Чат'
							style={{ color, ...tabNavStyles.tabScreen }}
						/>
					</View>
				)
			}}
		/>
		<Tab.Screen
			name='Search'
			component={Search}
			options={{
				tabBarIcon: ({ color }) => (
					<View className='items-center justify-center'>
						<SearchSvg color={color} />
						<ProTextMedium
							text='Поиск'
							style={{ color, ...tabNavStyles.tabScreen }}
						/>
					</View>
				)
			}}
		/>
		<Tab.Screen
			name='ProfileStack'
			component={ProfileStack}
			options={{
				tabBarIcon: ({ color }) => (
					<View className='items-center justify-center'>
						<UserSvg color={color} />
						<ProTextMedium
							text='Профиль'
							style={{ color, ...tabNavStyles.tabScreen }}
						/>
					</View>
				)
			}}
		/>
	</Tab.Navigator>
)

export default TabNavigator
