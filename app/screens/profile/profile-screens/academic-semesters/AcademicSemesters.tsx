import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'
import ArrowRightSvg from '../../profile-svg/common/ArrowRight'
import BackIconSvg from './BackIconSvg'
import { useSemestersByUser } from './hooks/useSemestersByUser'

const AcademicSemesters: FC = () => {
	const { goBack, navigate } = useTypedNavigation()
	const { semesters, isFetching } = useSemestersByUser()

	return (
		<View
			className='h-full'
			style={{ backgroundColor: COLORS.light.background.quaternary }}
		>
			<View
				className='flex-row items-center justify-between px-2 border-b-[#3c3c4321]'
				style={{ borderBottomWidth: 0.5, height: 50 }}
			>
				<Pressable
					className='flex-row items-center absolute left-2.5'
					onPress={goBack}
				>
					<BackIconSvg />
					<ProTextRegular
						text='Профиль'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<View style={{ flex: 1, alignItems: 'center' }}>
					<ProTextSemiBold
						style={{ letterSpacing: -0.41, fontSize: 17 }}
						text='Семестр'
					/>
				</View>
			</View>
			<View
				className={`${!semesters?.length && !isFetching ? 'flex-1 justify-center items-center' : ''}`}
			>
				{isFetching ? (
					Array.from({ length: 8 }).map((_, idx) => (
						<Placeholder Animation={Fade} className='bg-white' key={idx}>
							<View className='px-5 flex-row justify-between items-center py-3'>
								<PlaceholderLine
									width={50}
									className='rounded-none bg-white'
									height={12}
								/>
								<PlaceholderLine
									width={5}
									className='rounded-full bg-white'
									height={12}
								/>
							</View>
						</Placeholder>
					))
				) : semesters?.length ? (
					<View className='bg-white'>
						<>
							{semesters.map((semester, idx) => (
								<Pressable
									className='flex-row items-center pr-5 ml-5 justify-between py-3'
									onPress={() =>
										navigate('ExamsResults', { semesterId: semester.id })
									}
									key={semester.number}
									style={{
										borderBottomWidth: idx !== semesters.length - 1 ? 0.5 : 0,
										borderBottomColor: 'rgba(60, 60, 67, 0.13)'
									}}
								>
									<ProTextRegular
										text={`${semester.number} семестр`}
										className='text-base'
									/>
									<ArrowRightSvg />
								</Pressable>
							))}
						</>
					</View>
				) : (
					<ProTextRegular
						text='Экзамены не найдены 🤔'
						style={{ letterSpacing: -0.08, lineHeight: 18 }}
						className='text-center text-light-graphics-gray text-base mt-4'
					/>
				)}
			</View>
		</View>
	)
}

export default AcademicSemesters
