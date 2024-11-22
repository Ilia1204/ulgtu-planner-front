import { ProTextRegular } from '@/components'
import React from 'react'

export const ErrorText = ({ error }: { error: string }) => {
	return (
		<ProTextRegular
			style={{ fontSize: 15 }}
			className={`text-light-graphics-red absolute ${error.length > 34 ? '-bottom-10' : '-bottom-6'}`}
			text={error}
		/>
	)
}
