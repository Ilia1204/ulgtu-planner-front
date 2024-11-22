import { ProTextRegular } from '@/components'
import DismissKeyboard from '@/components/ui/form-elements/field/DismissKeyboard'
import { COLORS } from '@/constants/colors.constants'
import React, { FC } from 'react'
import { View } from 'react-native'

const Chat: FC = () => {
	return (
		<DismissKeyboard>
			<View
				className='h-full flex-1 justify-center items-center'
				style={{ backgroundColor: COLORS.light.background.tertiary }}
			>
				<ProTextRegular
					text='Чат пока в разработке... 😔'
					className='text-lg'
				/>
			</View>
		</DismissKeyboard>
	)
}

export default Chat
