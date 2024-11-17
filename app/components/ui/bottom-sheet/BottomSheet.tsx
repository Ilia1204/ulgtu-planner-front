import {
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
	BottomSheetModal,
	BottomSheetView
} from '@gorhom/bottom-sheet'
import { X } from 'lucide-react-native'
import React, {
	FC,
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo
} from 'react'
import {
	BackHandler,
	Platform,
	TouchableOpacity,
	View,
	useWindowDimensions
} from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomBackground from './CustomBackground'
import type { IBottomSheet } from './bottom-sheet.interface'

const BottomSheet: FC<PropsWithChildren<IBottomSheet>> = props => {
	const {
		bottomSheetModalRef,
		animatedPosition,
		setIsDark,
		children,
		onPress
	} = props

	const { height } = useWindowDimensions()
	const { top } = useSafeAreaInsets()
	const sheetChange = useSharedValue(0)

	const percentage =
		Platform.OS === 'ios' ? ((height - top) / height) * 100 - 2 : '91'

	const snapPoints = useMemo(() => ['25%', `${percentage}%`], [])
	const renderBackdrop = useCallback(
		(props: BottomSheetBackdropProps) => (
			<>
				<BottomSheetBackdrop
					{...props}
					opacity={0.8}
					pressBehavior={'collapse'}
					disappearsOnIndex={-1}
					appearsOnIndex={2}
				/>
			</>
		),
		[]
	)

	useEffect(() => {
		const backAction = () => {
			bottomSheetModalRef.current?.dismiss()
			return true
		}
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			backAction
		)

		return () => backHandler.remove()
	}, [])

	const handleSheetChanges = useCallback((index: number) => {
		sheetChange.value = index
		if (index === 2) setIsDark(true)
		else setIsDark(false)
	}, [])

	return (
		<BottomSheetModal
			animationConfigs={{
				overshootClamping: true,
				clamp: { min: 100, max: 400 }
			}}
			ref={bottomSheetModalRef}
			index={2}
			enableContentPanningGesture={false}
			enableHandlePanningGesture={false}
			backgroundComponent={CustomBackground}
			handleStyle={{ display: 'none' }}
			animatedPosition={animatedPosition}
			snapPoints={snapPoints}
			onChange={handleSheetChanges}
			backdropComponent={renderBackdrop}
		>
			<BottomSheetView className='rounded-none flex-1'>
				<View
					className='bg-[#F8F8F8] rounded-t-xl h-14'
					style={{
						borderBottomWidth: 0.5,
						borderBottomColor: '#E0E0E1'
					}}
				>
					<TouchableOpacity
						className='w-6 h-6 rounded-full bg-[#ADADB0] items-center justify-center self-end mx-4 mt-5'
						onPress={() => {
							bottomSheetModalRef.current?.dismiss()
							onPress?.()
						}}
					>
						<X color='#fff' size={15} />
					</TouchableOpacity>
				</View>
				{children}
			</BottomSheetView>
		</BottomSheetModal>
	)
}

export default BottomSheet
