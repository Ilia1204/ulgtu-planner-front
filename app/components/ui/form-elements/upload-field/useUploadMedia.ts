import { MediaService } from '@/services/media.service'
import { useMutation } from '@tanstack/react-query'
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker'
import { useCallback, useMemo, useState } from 'react'
import { Alert } from 'react-native'
import type { TypeUploadMedia, UploadedImage } from './upload-field.interface'

export const useUploadMedia: TypeUploadMedia = (
	onChange,
	folder,
	multiple,
	maxImages = 3
) => {
	const [isLoading, setIsLoading] = useState(false)
	const [paths, setPaths] = useState<UploadedImage[]>([])
	const [prevImages, setPrevImages] = useState<UploadedImage[]>([])

	const { mutateAsync } = useMutation({
		mutationKey: ['upload files'],
		mutationFn: (data: FormData) => MediaService.upload(data, folder),
		onSuccess(data) {
			const uploadedImages = data.data.map(item => ({
				path: item.path,
				size: item.size
			}))
			const updatedPaths = multiple
				? [...prevImages, ...uploadedImages]
				: [uploadedImages[0]]

			const sortedPaths = updatedPaths.sort((a, b) => {
				const pathA = Array.isArray(a.path) ? a.path.join('') : a.path
				const pathB = Array.isArray(b.path) ? b.path.join('') : b.path
				return pathA.localeCompare(pathB)
			})

			setPaths(sortedPaths)
			setPrevImages(sortedPaths)

			const pathsToUpdate = sortedPaths.map(image => image.path)
			onChange(multiple ? pathsToUpdate : pathsToUpdate[0])
		},
		onError() {
			Alert.alert(
				'Не удалось загрузить картинку',
				'Пожалуйста, повторите попытку снова'
			)
		}
	})

	const handleRemoveImage = (index: number) => {
		const updatedPaths = paths.filter((_, i) => i !== index)
		setPaths(updatedPaths)
		setPrevImages(updatedPaths)
		const pathsToUpdate = updatedPaths.map(image => image.path)
		onChange(multiple ? pathsToUpdate : pathsToUpdate[0])
	}

	const uploadFiles = useCallback(async () => {
		const availableSlots = maxImages - prevImages.length
		const shouldAllowMultipleSelection = prevImages.length < maxImages - 1
		setIsLoading(true)

		const result = await launchImageLibraryAsync({
			mediaTypes: MediaTypeOptions.Images,
			allowsMultipleSelection: shouldAllowMultipleSelection && multiple,
			selectionLimit: availableSlots,
			allowsEditing: !multiple && true,
			quality: 1,
			base64: true
		})

		if (result.canceled) {
			setIsLoading(false)
			return
		}

		const formData = new FormData()
		result.assets.slice(0, availableSlots).forEach(asset => {
			const localUri = asset.uri
			const filename = localUri.split('/').pop() || ''
			const match = /\.(\w+)$/.exec(filename)
			const type = match ? `image/${match[1]}` : `image`

			formData.append('file', {
				uri: localUri,
				name: filename,
				type
			} as unknown as Blob)
		})

		await mutateAsync(formData)

		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [mutateAsync, prevImages, maxImages, multiple])

	return useMemo(
		() => ({
			isLoading,
			uploadFiles,
			paths,
			setPaths,
			setPrevImages,
			handleRemoveImage
		}),
		[uploadFiles, isLoading, paths, prevImages]
	)
}
