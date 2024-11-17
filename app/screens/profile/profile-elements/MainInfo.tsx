import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { getEducationLevelTranslation } from '@/shared/types/student-info.interface'
import type { IFullUser } from '@/shared/types/user.interface'
import React, { FC } from 'react'
import { Image, View } from 'react-native'

const MainInfo: FC<{ data: IFullUser | undefined }> = ({ data }) => {
	const educationLevel = getEducationLevelTranslation(
		data?.studentInfo?.educationLevel as string
	)
	const extraInfo = `${data?.studentInfo.creditCardNumber || '23/864'}-${data?.studentInfo.group.name}`

	return (
		<View
			className='bg-white px-5 flex-row items-center justify-between'
			style={{ paddingVertical: 21 }}
		>
			<View>
				<ProTextSemiBold
					className='text-light-graphics-blue text-xs'
					style={{ letterSpacing: 0.06 }}
					text={educationLevel.toUpperCase()}
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
			<Image
				source={require('@/assets/images/default-avatar.jpg')}
				className='w-16 h-16 rounded-full'
				resizeMode='center'
			/>
		</View>
	)
}

export default MainInfo
