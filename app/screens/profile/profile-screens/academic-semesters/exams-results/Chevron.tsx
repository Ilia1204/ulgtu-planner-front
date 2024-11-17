import { ChevronUp } from 'lucide-react-native'
import React from 'react'
import Animated, {
	SharedValue,
	useAnimatedStyle
} from 'react-native-reanimated'

type Props = {
	progress: Readonly<SharedValue<0 | 1>>
}

const Chevron = ({ progress }: Props) => {
	const iconStyle = useAnimatedStyle(() => ({
		transform: [{ rotate: `${progress.value * 180}deg` }]
	}))

	return (
		<Animated.View style={iconStyle} className='absolute right-5 top-3'>
			<ChevronUp color='#C7C7CC' size={22} />
		</Animated.View>
	)
}

export default Chevron
