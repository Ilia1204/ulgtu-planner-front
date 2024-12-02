import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { IStudentExamResult } from '@/shared/types/student-exam-result.interface'
import React, { FC, useCallback } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import BackIconSvg from '../BackIconSvg'
import ExamResultItem from './ExamResultItem'
import SkeletonExamResult from './SkeletonExamResult'
import { useExamsResultsBySemesterId } from './hooks/useExamsResultsBySemesterId'

const ExamsResults: FC = () => {
	const { goBack } = useTypedNavigation()
	const { params } = useTypedRoute<'ExamsResults'>()
	const { results, isFetching } = useExamsResultsBySemesterId(params.semesterId)

	const renderItem = useCallback(
		({ item: result }: { item: IStudentExamResult }) => {
			return <ExamResultItem key={result.id} result={result} />
		},
		[]
	)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<View
				className='flex-row items-center  px-2 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5, height: 50 }}
			>
				<Pressable
					className='flex-row items-center absolute left-2.5'
					onPress={goBack}
				>
					<BackIconSvg />
					<ProTextRegular
						text='Семестр'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<ProTextSemiBold
						style={{
							letterSpacing: -0.41,
							fontSize: 17,
							textAlign: 'center'
						}}
						text='Предметы'
					/>
				</View>
			</View>
			{isFetching ? (
				<SkeletonExamResult />
			) : (
				<FlatList
					data={results ? results : []}
					keyExtractor={item => item.id.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={renderItem}
					ListEmptyComponent={() => (
						<ProTextMedium
							className='text-light-graphics-gray text-base px-4 text-center'
							text='Экзаменов пока нет'
						/>
					)}
				/>
			)}
		</View>
	)
}

export default ExamsResults
