import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import BackIconSvg from '@/screens/profile/profile-screens/academic-semesters/BackIconSvg'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'

const ClassItem: FC = () => {
	const { goBack } = useTypedNavigation()

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<View
				className='flex-row items-center justify-between h-12 px-2 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5 }}
			>
				<Pressable
					className='flex-row items-center absolute left-2.5'
					onPress={goBack}
				>
					<BackIconSvg />
					<ProTextRegular
						text='КлассItem'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<ProTextSemiBold
						style={{ letterSpacing: -0.41, fontSize: 17 }}
						text='Семестр'
					/>
				</View>
			</View>
		</View>
	)
}

export default ClassItem
