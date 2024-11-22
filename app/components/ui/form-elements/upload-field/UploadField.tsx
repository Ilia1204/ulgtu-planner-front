import Loader from '@/components/ui/Loader'
import { getMediaSource } from '@/utils/get-media-source'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import type { IUploadField } from './upload-field.interface'
import { useUploadMedia } from './useUploadMedia'

const UploadField: FC<PropsWithChildren<IUploadField>> = props => {
	const {
		onChange,
		error,
		folder,
		isNoImage = false,
		style,
		className,
		maxImages = 3,
		multiple = true,
		showSizes = true,
		value
	} = props

	const { isLoading, uploadFiles, paths, handleRemoveImage, setPaths } =
		useUploadMedia(onChange, folder, multiple, maxImages)
	const [showUploadButton, setShowUploadButton] = useState(true)

	useEffect(() => {
		setShowUploadButton(paths.length === 0 || paths.length < maxImages)
	}, [paths, maxImages])

	useEffect(() => {
		if (value) {
			if (!Array.isArray(value)) setPaths([{ path: value }])
			else {
				const pathsArray = value.map(path => ({ path }))
				setPaths(pathsArray)
			}
		}
	}, [value])

	return (
		<View className={`self-center ${className}`} style={style}>
			{!isNoImage && (
				<View>
					{isLoading ? (
						<View style={{ width: 100, height: 100, alignItems: 'center' }}>
							<Loader />
						</View>
					) : paths.length > 0 ? (
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							{/* {showUploadButton && paths.length && multiple ? (
								<Pressable
									className='bg-[#FCE9F5] p-4 rounded-xl items-center justify-center mr-3'
									style={{ width: 100, height: 100 }}
									onPress={uploadFiles}
								></Pressable>
							) : null} */}
							<View className='flex-row gap-x-3'>
								{paths.map((path, index) => {
									return (
										<Pressable key={index} onPress={uploadFiles}>
											<Animated.View exiting={FadeOut} entering={FadeIn}>
												<Image
													source={getMediaSource(path.path)}
													className='w-16 h-16 rounded-full'
													resizeMode='center'
												/>
											</Animated.View>
										</Pressable>
									)
								})}
							</View>
						</ScrollView>
					) : null}
				</View>
			)}
			{showSizes && (
				<View className='gap-y-2 mt-1'>
					{paths.map((path, index) => {
						return (
							<Text
								key={path + String(index)}
								className='text-text text-xs'
								style={{ fontFamily: 'regular' }}
							>
								{index + 1}) {path.path}
							</Text>
						)
					})}
					{error && <Text className='text-red-500'>{error.message}</Text>}
				</View>
			)}
		</View>
	)
}

export default UploadField
