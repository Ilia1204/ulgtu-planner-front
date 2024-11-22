import { Dispatch, SetStateAction } from 'react'
import { FieldError } from 'react-hook-form'
import { ViewStyle } from 'react-native'

export interface IUploadField {
	folder?: string
	value?: string | string[]
	onChange: (...event: any[]) => void
	error?: FieldError
	style?: ViewStyle
	isNoImage?: boolean
	className?: string
	maxImages?: number
	multiple?: boolean
	showSizes?: boolean
}

export type TypeUploadMedia = (
	onChange: (...event: any[]) => void,
	folder?: string,
	multiple?: boolean,
	maxImages?: number
) => {
	uploadFiles: () => Promise<void>
	isLoading: boolean
	paths: UploadedImage[]
	multiple?: boolean
	setPaths: Dispatch<SetStateAction<UploadedImage[]>>
	handleRemoveImage: (index: number) => void
}

export interface UploadedImage {
	path: string | string[]
	size?: string
}
