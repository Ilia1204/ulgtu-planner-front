import { Loader, ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import MainHeader from '@/components/ui/headers/MainHeader'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import {
	getEducationLevelTranslation,
	getStudyFormTranslation
} from '@/shared/types/group.interface'
import { Search as SearchIcon } from 'lucide-react-native'
import React, { FC, memo, useMemo } from 'react'
import { Controller } from 'react-hook-form'
import { FlatList, Pressable, TextInput, View } from 'react-native'
import ArrowRightSvg from '../profile/profile-svg/common/ArrowRight'
import { SearchResults, useSearch } from './hooks/useSearch'
import ClearSearchSvg from './search-svg/ClearSearchSvg'

const Search: FC = () => {
	const { control, data, searchTerm, isLoading } = useSearch()
	const { navigate } = useTypedNavigation()

	const getSearchText = (item: SearchResults) => {
		if (item?.address) return item.address
		if (item?.position) return item.position
		return `${getEducationLevelTranslation(item?.educationLevel)}, ${item?.courseNumber} курс, ${getStudyFormTranslation(item?.studyForm)} форма`
	}

	const renderItem = useMemo(
		() =>
			({ item }: { item: SearchResults }) => (
				<Pressable
					className='flex-row items-center p-5 pl-0 ml-5 justify-between'
					key={item?.id + Math.random()}
					onPress={() =>
						navigate('SearchItem', {
							id: item.id,
							title: 'Поиск',
							type: item.position || item.address ? '' : 'group'
						})
					}
					style={{
						borderBottomWidth: 0.5,
						borderBottomColor: 'rgba(60, 60, 67, 0.13)'
					}}
				>
					<View className='gap-y-1'>
						<ProTextSemiBold
							text={item?.name || item?.user?.fullName}
							style={{ fontSize: 15, letterSpacing: -0.08 }}
						/>
						<ProTextRegular
							className='text-light-graphics-gray'
							style={{ letterSpacing: -0.08 }}
							text={getSearchText(item)}
						/>
					</View>
					<ArrowRightSvg size={25} />
				</Pressable>
			),
		[navigate]
	)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.tertiary }}
		>
			<MainHeader title='Поиск' />
			<View className='mx-3.5 py-3 bg-light-background-quaternary'>
				<SearchIcon
					color={COLORS.light.graphics.gray}
					size={22}
					className='absolute z-50'
					style={{ top: 22, left: 14 }}
				/>
				<Controller
					control={control}
					name='searchTerm'
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<>
							<TextInput
								className='px-11 py-2.5 bg-light-graphics-gray5 rounded-xl'
								value={value}
								onChangeText={onChange}
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
								onPress={() => onChange('')}
							>
								<ClearSearchSvg />
							</Pressable>
						</>
					)}
				/>
			</View>
			{!!searchTerm ? (
				<>
					{isLoading ? (
						<Loader />
					) : (
						<FlatList
							data={data}
							showsVerticalScrollIndicator={false}
							keyboardShouldPersistTaps='always'
							style={{ borderTopWidth: 0.5 }}
							className='border-t-[#3c3c4321]'
							renderItem={renderItem}
							ListEmptyComponent={() => (
								<ProTextRegular
									text='По Вашему запросу ничего не найдено'
									style={{ letterSpacing: -0.08 }}
									className='text-center mt-4 leading-4 color-[#3c3c4399]'
								/>
							)}
							keyExtractor={item => item?.id?.toString()}
						/>
					)}
				</>
			) : (
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
		</View>
	)
}

export default memo(Search)
