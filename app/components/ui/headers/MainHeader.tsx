import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import ProTextSemiBold from '../custom-texts/ProTextSemiBold'

interface IMainHeader {
	isHasContent?: boolean
	title?: string
	icon?: () => JSX.Element
	onPressIcon?: () => void
}

const MainHeader: FC<IMainHeader> = props => {
	const { isHasContent = true, title, icon, onPressIcon } = props

	return (
		<View
			className='px-4 flex-row items-center  border-b-[#3c3c4321]'
			style={{
				height: 50,
				borderBottomWidth: 0.5,
				backgroundColor: 'rgb(247, 247, 247)'
			}}
		>
			{isHasContent ? (
				<>
					<View className='flex-1 items-center'>
						<ProTextSemiBold
							className='text-light-label-primary mb-1'
							text={title}
							style={{ fontSize: 18 }}
						/>
					</View>
					<Pressable onPress={onPressIcon} className='absolute right-4'>
						{icon}
					</Pressable>
				</>
			) : null}
		</View>
	)
}

export default MainHeader
