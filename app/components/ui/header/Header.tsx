import { COLORS } from '@/constants/colors.constants'
import { ArrowLeft, Share } from 'lucide-react-native'
import React, { FC, PropsWithChildren } from 'react'
import { Pressable, Text, View } from 'react-native'
import ProTextRegular from '../custom-texts/ProTextRegular'
import ProTextSemiBold from '../custom-texts/ProTextSemiBold'

interface IHeader {
	isFirstVar?: boolean
	isSecondVar?: boolean
	isThirdVar?: boolean

	firstText?: string

	firstTextBackBtn?: string
	secondTextBackBtn?: string
	thirdTextBackBtn?: string
}

const Header: FC<PropsWithChildren<IHeader>> = props => {
	const {
		isFirstVar,
		firstText,
		firstTextBackBtn = '',
		isSecondVar,
		secondTextBackBtn = '',
		thirdTextBackBtn = '',
		children
	} = props

	return (
		<View className='h-14'>
			{children ? (
				isFirstVar ? (
					<View className='flex-row items-center justify-between'>
						<Pressable>
							<ArrowLeft color={COLORS.light.graphics.blue} />
							<ProTextRegular
								text={firstTextBackBtn}
								className='text-light-graphics-blue'
								style={{ fontSize: 17 }}
							/>
						</Pressable>
						<ProTextSemiBold
							style={{ letterSpacing: -0.41, fontSize: 17 }}
							text={firstText}
						/>
					</View> ? (
						isSecondVar
					) : (
						<Pressable>
							<ArrowLeft color={COLORS.light.graphics.blue} />
							<ProTextRegular
								text={secondTextBackBtn}
								className='text-light-graphics-blue'
								style={{ fontSize: 17 }}
							/>
						</Pressable>
					)
				) : (
					<View className='flex-row items-center justify-between'>
						<Pressable>
							<ArrowLeft color={COLORS.light.graphics.blue} />
							<ProTextRegular
								text={thirdTextBackBtn}
								className='text-light-graphics-blue'
								style={{ fontSize: 17 }}
							/>
						</Pressable>
						<Share color={COLORS.light.graphics.blue} />
					</View>
				)
			) : (
				<Text></Text>
			)}
		</View>
	)
}

export default Header
