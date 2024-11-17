import { ProTextRegular } from '@/components'
import React from 'react'

export const ErrorText = ({ error }: { error: string }) => (
	<ProTextRegular
		style={{ fontSize: 15 }}
		className='text-light-graphics-red px-4 absolute -bottom-10'
		text={error}
	/>
)
