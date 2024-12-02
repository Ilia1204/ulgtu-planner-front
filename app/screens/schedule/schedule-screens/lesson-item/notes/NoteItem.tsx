import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import { INote } from '@/shared/types/note.interface'
import { shortenName } from '@/utils/shorten-name'
import React, { FC, useRef } from 'react'
import { Animated, Pressable, View } from 'react-native'
import { createPanResponder } from './create-pan-responder'
import { useNote } from './hooks/useNote'

const NoteItem: FC<{ note: INote }> = ({ note }) => {
	const translateX = useRef(new Animated.Value(0)).current
	const panResponder = useRef(createPanResponder(translateX)).current

	const { deleteNote } = useNote()

	return (
		<Animated.View
			key={note.id}
			style={{ transform: [{ translateX }] }}
			className='mb-1'
		>
			<View
				{...panResponder.panHandlers}
				className='bg-white flex-row px-5 justify-between py-3.5'
				style={{
					borderTopWidth: 0.5,
					borderTopColor: 'rgba(42, 42, 51, 0.13)',
					borderBottomWidth: 0.5,
					borderBottomColor: 'rgba(42, 42, 51, 0.13)'
				}}
			>
				<ProTextRegular
					text={note.content}
					style={{ fontSize: 15 }}
					numberOfLines={1}
				/>
				{!note.isPrivate ? (
					<ProTextRegular
						text={shortenName(note?.user?.fullName)}
						className='text-light-graphics-red absolute text-xs bottom-0 right-2.5'
						numberOfLines={1}
						style={{ letterSpacing: -0.08, fontSize: 11 }}
					/>
				) : null}
			</View>
			<Pressable
				className='h-full justify-center items-center absolute bg-light-graphics-red'
				style={{ width: 100, right: -100 }}
				onPress={() => deleteNote(note.id)}
			>
				<ProTextMedium
					text='Удалить'
					style={{ fontSize: 15 }}
					numberOfLines={1}
					className='text-white'
				/>
			</Pressable>
		</Animated.View>
	)
}

export default NoteItem
