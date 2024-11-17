import { ButtonBackground } from '@/components'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useRef, useState } from 'react'
import { Animated, FlatList, View } from 'react-native'
import Paginator from './Paginator'
import OnBoardingItem from './onboarding-item/OnBoardingItem'
import type { ISlide } from './slides/slide.interface'
import { slides } from './slides/slides.data'

const OnBoarding = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const { navigate } = useTypedNavigation()
	const scrollX = useRef(new Animated.Value(0)).current
	const slidesRef = useRef<FlatList>(null)

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0]?.index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const scrollTo = async () => {
		if (currentIndex < slides.length - 1) {
			slidesRef?.current?.scrollToIndex({ index: currentIndex + 1 })
		} else {
			try {
				await AsyncStorage.setItem('@viewedOnboarding', 'true')
				if (slides.length === 4) navigate('Login')
			} catch (error: any) {
				console.log(error.message)
			}
		}
	}

	return (
		<View className='justify-center items-center flex-1 bg-white'>
			<View style={{ flex: 0.85 }}>
				<FlatList
					data={slides}
					renderItem={({ item }: { item: ISlide }) => (
						<OnBoardingItem item={item} />
					)}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					bounces={false}
					keyExtractor={item => item._id.toString()}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{
							useNativeDriver: false
						}
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
					contentContainerStyle={{
						justifyContent: 'center',
						alignItems: 'center'
					}}
				/>
			</View>
			<Paginator data={slides} scrollX={scrollX} />
			<View className='w-full'>
				<ButtonBackground
					onPress={scrollTo}
					buttonText='Войти'
					className='mx-5'
				/>
			</View>
		</View>
	)
}

export default OnBoarding
