import {
	KeyboardTypeOptions,
	NativeSyntheticEvent,
	TextInputFocusEventData,
	TextStyle
} from 'react-native'

export interface IField {
	onChange: (val: string) => void
	val: string | undefined
	placeholder: string
	isSecure?: boolean
	state?: 'error' | 'success'
	maxLength?: number
	keyboardType?: KeyboardTypeOptions
	className?: string
	placeholderTextColor?: string
	styles?: TextStyle
	disabled?: boolean
	numberOfLines?: number | undefined
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined
	onFocus?:
		| ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
		| undefined
	onBlur?:
		| ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
		| undefined
	isNumber?: boolean
	multiline?: boolean
}
