import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import React, { FC } from 'react'
import { Pressable, ScrollView, StatusBar, Text, View } from 'react-native'
import BackIconSvg from '../BackIconSvg'
import ExamResultItem from './ExamResultItem'
import { useExamsResultsBySemesterId } from './hooks/useExamsResultsBySemesterId'

const ExamsResults: FC = () => {
	const { goBack } = useTypedNavigation()
	const { params } = useTypedRoute<'ExamsResults'>()
	const { results } = useExamsResultsBySemesterId(params.semesterId)

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<StatusBar backgroundColor={COLORS.light.background.tertiary} />
			<View
				className='flex-row items-center justify-between h-12 px-2 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5 }}
			>
				<Pressable className='flex-row items-center' onPress={goBack}>
					<BackIconSvg />
					<ProTextRegular
						text='Семестр'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<ProTextSemiBold
					style={{ letterSpacing: -0.41, fontSize: 17 }}
					text='Предметы'
				/>
				<Text style={{ fontSize: 19, opacity: 0 }}>Предметы</Text>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				{results?.map(result => (
					<ExamResultItem key={result.id} result={result} />
				))}
			</ScrollView>
		</View>
	)
}

export default ExamsResults
