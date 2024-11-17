import DisplayBold from '@/components/ui/custom-texts/DisplayBold'
import ProTextRegular from '@/components/ui/custom-texts/ProTextRegular'
import React from 'react'
import { View } from 'react-native'

interface StepsContentProps {
	step: number
	updatedSteps: {
		title: string
		description: string
	}[]
}

export const StepsContent = ({ step, updatedSteps }: StepsContentProps) => (
	<View className='px-4 mt-7'>
		<DisplayBold text={updatedSteps[step]?.title} />
		<ProTextRegular
			className='text-light-label-secondary opacity-60 mt-4'
			text={updatedSteps[step]?.description}
			style={{ fontSize: 15, letterSpacing: -0.41 }}
		/>
	</View>
)
