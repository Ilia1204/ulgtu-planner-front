import { COLORS } from '@/constants/colors.constants'
import React, { FC, useCallback } from 'react'
import { TextInput } from 'react-native'
import type { IField } from './field.interface'

const Field: FC<IField> = props => {
	const {
		onChange,
		placeholder,
		val,
		isSecure = false,
		maxLength,
		keyboardType,
		className,
		styles,
		onFocus,
		onBlur,
		state,
		numberOfLines,
		disabled,
		isNumber,
		autoCapitalize = 'none',
		multiline = false,
		placeholderTextColor = '#8A8A8E',
		...rest
	} = props

	const onChangeText = useCallback(
		(val: string) => {
			onChange(val)
		},
		[onChange]
	)

	return (
		<TextInput
			placeholder={placeholder}
			placeholderTextColor={placeholderTextColor}
			autoCorrect={false}
			className='py-4 mt-5 px-4 border border-[#E6E6E7] rounded-2xl'
			style={{
				fontFamily: 'pro-text-regular',
				fontSize: 17,
				letterSpacing: -0.41
			}}
			selectionColor={COLORS.light.graphics.blue}
			value={val}
			onChangeText={onChangeText}
			keyboardType={keyboardType}
			secureTextEntry={isSecure}
			autoCapitalize={autoCapitalize}
			numberOfLines={numberOfLines}
			multiline={multiline}
			maxLength={maxLength}
			onBlur={onBlur}
			{...rest}
		/>
	)
}

export default Field
