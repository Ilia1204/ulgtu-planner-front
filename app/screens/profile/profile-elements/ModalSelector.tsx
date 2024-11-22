import { SERVER_URL_EXTRA } from '@/api/interceptors'
import { Loader } from '@/components'
import { COLORS } from '@/constants/colors.constants'
import { getMediaSource } from '@/utils/get-media-source'
import {
	CameraType,
	MediaTypeOptions,
	launchCameraAsync,
	launchImageLibraryAsync,
	requestCameraPermissionsAsync,
	requestMediaLibraryPermissionsAsync
} from 'expo-image-picker'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Alert, Image } from 'react-native'
import Modal from 'react-native-modal-selector'
import { useUpdateAvatar } from './useUpdateAvatar'

const ModalSelector: FC<{
	setIsVisibleModal: Dispatch<SetStateAction<boolean>>
}> = ({ setIsVisibleModal }) => {
	const [uploadedImage, setUploadedImage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const { mutate } = useUpdateAvatar()

	const uploadImageToServer = async (uri: string) => {
		const formData = new FormData()

		const uriParts = uri.split('.')
		const fileType = uriParts[uriParts.length - 1]
		const file = {
			uri,
			name: `photo.${fileType}`,
			type: `image/${fileType}`
		}

		formData.append('file', file as any)

		try {
			setIsLoading(true)
			const response = await fetch(`${SERVER_URL_EXTRA}/api/files`, {
				method: 'POST',
				body: formData,
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			const result = await response.json()
			if (response.ok) {
				setUploadedImage(result.data[0].path)
				mutate({ avatarPath: result.data[0].path })

				setIsLoading(false)
			} else {
				Alert.alert('Ошибка', 'Не удалось загрузить изображение')
				setIsLoading(false)
			}
		} catch (error) {
			Alert.alert('Ошибка', 'Произошла ошибка при загрузке изображения')
			setIsLoading(false)
		}
	}

	const pickImageFromGallery = async () => {
		const permissionResult = await requestMediaLibraryPermissionsAsync()
		if (!permissionResult.granted) {
			Alert.alert(
				'Ошибка',
				'Разрешите доступ к галерее, чтобы выбрать изображение.'
			)
			return
		}

		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1
		})
		if (!result.canceled) {
			setUploadedImage(result.assets[0].uri)
			uploadImageToServer(result.assets[0].uri)
		}
	}

	const takePhoto = async () => {
		const permissionResult = await requestCameraPermissionsAsync()
		if (!permissionResult.granted) {
			Alert.alert('Ошибка', 'Разрешите доступ к камере, чтобы сделать фото.')
			return
		}

		const result = await launchCameraAsync({
			mediaTypes: MediaTypeOptions.Images,
			cameraType: CameraType.front,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1
		})

		if (!result.canceled) {
			uploadImageToServer(result.assets[0].uri)
			setUploadedImage(result.assets[0].uri)
		}
	}

	const handleOptionSelect = (key: number) => {
		if (key === 2) pickImageFromGallery()
		else if (key === 3) takePhoto()
	}

	return (
		<Modal
			data={[
				{ key: 1, section: true, label: 'Изображение' },
				{ key: 2, label: 'Выбрать из библиотеки' },
				{ key: 3, label: 'Сделать фотографию' }
			]}
			touchableActiveOpacity={1}
			cancelText='Отменить'
			onChange={option => handleOptionSelect(option.key)}
			onModalOpen={() => setIsVisibleModal(true)}
			onModalClose={() => setIsVisibleModal(false)}
			cancelTextStyle={{
				fontFamily: 'pro-text-regular',
				letterSpacing: -0.41,
				color: COLORS.light.graphics.blue,
				fontSize: 17
			}}
			cancelStyle={{
				borderRadius: 14,
				elevation: 1,
				backgroundColor: COLORS.light.background.tertiary,
				height: 46,
				justifyContent: 'center'
			}}
			cancelContainerStyle={{
				position: 'absolute',
				bottom: 20,
				alignSelf: 'center',
				width: '100%'
			}}
			optionStyle={{
				backgroundColor: COLORS.light.background.tertiary,
				height: 48,
				justifyContent: 'center',
				borderRadius: 4,
				borderTopColor: '#B5B5B7'
			}}
			optionTextStyle={{
				fontFamily: 'pro-text-regular',
				letterSpacing: -0.41,
				color: COLORS.light.graphics.blue,
				fontSize: 17
			}}
			sectionStyle={{
				height: 54,
				justifyContent: 'center'
			}}
			sectionTextStyle={{
				fontFamily: 'pro-text-regular',
				letterSpacing: -0.08,
				color: COLORS.light.graphics.gray,
				fontSize: 13
			}}
			optionContainerStyle={{
				backgroundColor: COLORS.light.background.tertiary,
				paddingVertical: 0,
				borderRadius: 14,
				paddingHorizontal: 0,
				position: 'absolute',
				bottom: 70,
				width: '100%',
				alignSelf: 'center',
				elevation: 1
			}}
			overlayStyle={{
				backgroundColor: 'rgba(92, 92, 92, 0.43)',
				padding: '3%'
			}}
			backdropPressToClose={true}
		>
			{isLoading ? (
				<Loader />
			) : (
				<Image
					source={
						uploadedImage
							? getMediaSource(uploadedImage)
							: require('@/assets/images/default-avatar.jpg')
					}
					className='w-16 h-16 rounded-full'
					resizeMode='center'
				/>
			)}
		</Modal>
	)
}

export default ModalSelector
