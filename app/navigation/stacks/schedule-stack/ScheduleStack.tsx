import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { TypeRootStackParamList } from '../../navigation.types'
import { scheduleStackRoutes } from './schedule-stack.routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const ScheduleStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{scheduleStackRoutes.map(route => (
				<Stack.Screen key={route.name} {...route} />
			))}
		</Stack.Navigator>
	)
}

export default ScheduleStack