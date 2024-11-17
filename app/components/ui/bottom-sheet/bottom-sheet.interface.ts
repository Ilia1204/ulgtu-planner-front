import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Dispatch, RefObject, SetStateAction } from 'react'
import { SharedValue } from 'react-native-reanimated'

export interface IBottomSheet {
	bottomSheetModalRef: RefObject<BottomSheetModal>
	animatedPosition: SharedValue<number>
	setIsDark: Dispatch<SetStateAction<boolean>>
	onPress?: () => void
}
