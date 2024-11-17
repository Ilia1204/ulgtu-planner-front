import { COLORS } from '@/constants/colors.constants'
import cn from 'clsx'
import React, { FC } from 'react'
import { ActivityIndicator } from 'react-native'

interface ILoader {
	className?: string
	size?: number
}

const Loader: FC<ILoader> = ({ className, size = 50 }) => {
	return (
		<ActivityIndicator
			size={size}
			color={COLORS.light.graphics.blue}
			className={cn('flex-1 justify-center items-center', className)}
		/>
	)
}

export default Loader
