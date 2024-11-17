import { DisplayBold, ProTextRegular } from '@/components'
import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import {
	BlueCircleSvg,
	CyanCircleSvg,
	GreenRectSvg,
	PurpleRectSvg
} from '../onboarding-svg'
import type { ISlide } from '../slides/slide.interface'
import { OnBoardingStyles } from './onboarding-item.styles'
import { SVGComponents } from './svg-components.data'

const getSvgStyles = (id: number) => ({
	cyanCircle: id === 1 ? { bottom: 7, left: 6 } : { top: 27 },
	blueCircle:
		id === 1 ? { top: 24, right: 20 } : { bottom: 13, right: 12, zIndex: -1 },
	greenRect: id === 1 ? { bottom: 9, right: 56 } : { top: 64, left: 207 },
	purpleRect: id === 1 ? { left: 4, top: 87 } : { top: 147, left: 4 }
})

const OnBoardingItem = ({ item }: { item: ISlide }) => {
	const { width } = useWindowDimensions()
	const svgStyles = getSvgStyles(item._id)

	return (
		<View style={{ width }}>
			<View style={{ width: 228, height: 228, alignSelf: 'center' }}>
				<View
					className='bg-light-background-primary absolute z-10'
					style={OnBoardingStyles.centerLogoWrapper}
				/>
				{SVGComponents[item._id]}
				<CyanCircleSvg style={svgStyles.cyanCircle} />
				<BlueCircleSvg style={svgStyles.blueCircle} />
				<GreenRectSvg style={svgStyles.greenRect} />
				<PurpleRectSvg style={svgStyles.purpleRect} />
			</View>
			<View className='mt-14' style={{ minHeight: 150 }}>
				<DisplayBold
					styles={{ fontSize: 28, letterSpacing: 0.35 }}
					className='text-center px-12'
					text={item?.title}
				/>
				<ProTextRegular
					className='text-center text-light-label-secondary opacity-60 mt-4 px-4'
					style={{ fontSize: 17, letterSpacing: -0.41 }}
					text={item.description}
				/>
			</View>
		</View>
	)
}

export default OnBoardingItem
