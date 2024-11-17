import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import React, { FC } from 'react'
import { Pressable, StatusBar, Text, View } from 'react-native'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'
import ArrowRightSvg from '../../profile-svg/common/ArrowRight'
import BackIconSvg from './BackIconSvg'
import { useSemestersByUser } from './hooks/useSemestersByUser'

const AcademicSemesters: FC = () => {
	const { goBack, navigate } = useTypedNavigation()
	const { semesters } = useSemestersByUser()

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
						text='Профиль'
						className='text-light-graphics-blue ml-0.5'
						style={{ fontSize: 17 }}
					/>
				</Pressable>
				<ProTextSemiBold
					style={{ letterSpacing: -0.41, fontSize: 17 }}
					text='Семестр'
				/>
				<Text style={{ fontSize: 22, opacity: 0 }}>Семестр</Text>
			</View>
			<View className='bg-white'>
				{!semesters?.length
					? Array.from({ length: 8 }).map((_, idx) => (
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
					: semesters.map((semester, idx) => (
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
			</View>
		</View>
	)
}

export default AcademicSemesters
