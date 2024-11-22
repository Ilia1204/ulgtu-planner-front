import { SERVER_URL_EXTRA } from '@/api/interceptors'
import { ImageSourcePropType } from 'react-native'

export const getMediaSource = (
	path: string | undefined | string[]
): ImageSourcePropType => ({
	uri: SERVER_URL_EXTRA + path
})
