import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { COLORS } from '@/constants/colors.constants'
import { Chat, Search } from '@/screens'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { View } from 'react-native'
import ProfileStack from '../stacks/profile-stack/ProfileStack'
import ScheduleStack from '../stacks/schedule-stack/ScheduleStack'
import { tabNavStyles } from './tab-navigator.styles'

const Tab = createBottomTabNavigator()

const TabNavigator: FC = () => (
	<Tab.Navigator
		screenOptions={({ route }) => ({
			headerShown: false,
			tabBarActiveTintColor: COLORS.light.graphics.blue,
			tabBarInactiveTintColor: COLORS.light.graphics.gray,
			tabBarStyle: {
				backgroundColor: COLORS.light.background.quaternary,
				elevation: 0,
				height: 70,
				paddingBottom: 7,
				borderTopColor: '#3c3c4321',
				borderTopWidth: 0.5,
				display: route.name === 'ChangePassword' ? 'none' : 'flex'
			},
			tabBarLabelStyle: { display: 'none' }
		})}
		initialRouteName='ScheduleStack'
	>
		<Tab.Screen
			name='ScheduleStack'
			component={ScheduleStack}
			options={{
				tabBarIcon: ({ color }) => (
					<View className='items-center justify-center'>
						<Ionicons name='briefcase' size={23} color={color} />
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
						<Ionicons name='chatbubble' size={23} color={color} />
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
						<Ionicons name='search' size={23} color={color} />
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
						<Ionicons name='person' size={23} color={color} />
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
