import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { getEducationLevelTranslation } from '@/shared/types/group.interface'
import type { IFullUser } from '@/shared/types/user.interface'
import React, { FC, useState } from 'react'
import { StatusBar, View } from 'react-native'
import ModalSelector from './ModalSelector'

const MainInfo: FC<{ data: IFullUser | undefined }> = ({ data }) => {
	const educationLevel = data?.studentInfo
		? getEducationLevelTranslation(
				data?.studentInfo?.group?.educationLevel as string
			)
		: data?.employmentInfo.position

	const extraInfo = data?.studentInfo
		? `${data?.studentInfo?.creditCardNumber || 'YY/XXX'}-${data?.studentInfo?.group?.name} (${data?.studentInfo?.subgroup?.name[0]} подгруппа)`
		: data?.email

	const [isVisibleModal, setIsVisibleModal] = useState(false)

	return (
		<View
			className='bg-white px-5 flex-row items-center justify-between'
			style={{ paddingVertical: 21 }}
		>
			<StatusBar
				backgroundColor={
					isVisibleModal
						? 'rgba(92, 92, 92, 0.47)'
						: COLORS.light.background.tertiary
				}
				barStyle='dark-content'
			/>
			<View>
				<ProTextSemiBold
					className='text-light-graphics-blue text-xs'
					style={{ letterSpacing: 0.06 }}
					text={
						educationLevel
							? educationLevel.toUpperCase()
							: data?.employmentInfo.position.toUpperCase()
					}
				/>
				<ProTextSemiBold
					className='text-light-label-primary mt-2'
					style={{ letterSpacing: -0.08 }}
					text={data?.fullName}
				/>
				<ProTextRegular
					className='text-light-graphics-gray mt-1'
					style={{ letterSpacing: -0.08 }}
					text={extraInfo}
				/>
			</View>
			<ModalSelector setIsVisibleModal={setIsVisibleModal} />
		</View>
	)
}

export default MainInfo
