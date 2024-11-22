import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import DismissKeyboard from '@/components/ui/form-elements/field/DismissKeyboard'
import { COLORS } from '@/constants/colors.constants'
import { Search as SearchIcon } from 'lucide-react-native'
import React, { FC, useState } from 'react'
import { FlatList, Pressable, Text, TextInput, View } from 'react-native'
import ClearSearchSvg from './ClearSearchSvg'

const array: any = []

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<DismissKeyboard>
			<View
				className='h-full'
				style={{ backgroundColor: COLORS.light.background.tertiary }}
			>
				<View
					className='py-2.5 border-b-[#3c3c4321]'
					style={{
						borderBottomWidth: 0.5,
						backgroundColor: 'rgb(247, 247, 247)'
					}}
				>
					<ProTextSemiBold
						className='text-light-label-primary mb-1 text-center'
						text='Поиск'
						style={{ fontSize: 18 }}
					/>
				</View>
				<View className='mx-3.5 py-3'>
					<SearchIcon
						color={COLORS.light.graphics.gray}
						size={22}
						className='absolute z-50'
						style={{ top: 22, left: 14 }}
					/>
					<TextInput
						className='px-11 py-2.5 bg-light-graphics-gray5 rounded-xl'
						value={searchTerm}
						onChangeText={setSearchTerm}
						numberOfLines={1}
						placeholder='Поиск'
						placeholderTextColor={COLORS.light.graphics.gray}
						autoCorrect={false}
						style={{
							fontFamily: 'pro-text-regular',
							fontSize: 16,
							letterSpacing: -0.24
						}}
						selectionColor={COLORS.light.graphics.blue}
					/>
					<Pressable
						style={{ position: 'absolute', top: 23.3, right: 12 }}
						onPress={() => setSearchTerm('')}
					>
						<ClearSearchSvg />
					</Pressable>
				</View>
				<FlatList
					data={array}
					showsVerticalScrollIndicator={false}
					renderItem={() => <Text></Text>}
					ListEmptyComponent={() => (
						<View className='flex-1 justify-center items-center'>
							<ProTextRegular
								text='Приложение сможет найти расписание преподавателя, группы или аудитории 👍'
								style={{
									letterSpacing: -0.08,
									lineHeight: 18,
									color: 'rgba(60, 60, 67, 0.6)'
								}}
								className='text-center'
							/>
						</View>
					)}
					contentContainerStyle={
						!array.length ? { flexGrow: 0.9, justifyContent: 'center' } : {}
					}
					keyExtractor={item => item.id.toString()}
				/>
			</View>
		</DismissKeyboard>
	)
}

export default Search
