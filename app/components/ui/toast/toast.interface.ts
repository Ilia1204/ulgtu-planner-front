import { Ref } from 'react'

export interface IToast {
	show: (
		text: string,
		type: 'info' | 'success' | 'error',
		duration: number
	) => void
	hide: (callback?: () => void) => void
}

export type ConfigProps = {
	text?: string
	type?: 'info' | 'success' | 'error'
	duration: number
}

export interface Props {
	ref: Ref<IToast>
	duration?: number
	onHide?: () => void
}
