import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'
import { TypeRootStackParamList } from '../../navigation.types'
import { searchStackRoutes } from './search-stack-routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const SearchStack: FC = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			{searchStackRoutes.map(route => (
				<Stack.Screen key={route.name} {...route} />
			))}
		</Stack.Navigator>
	)
}

export default SearchStack
