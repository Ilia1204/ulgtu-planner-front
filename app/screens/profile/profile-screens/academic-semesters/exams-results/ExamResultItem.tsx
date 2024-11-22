import { ProTextRegular } from '@/components'
import ProTextMedium from '@/components/ui/custom-texts/ProTextMedium'
import {
	EnumExamResult,
	IStudentExamResult,
	examResultTranslation,
	examTypeTranslation
} from '@/shared/types/student-exam-result.interface'
import { shortenName } from '@/utils/shorten-name'
import dayjs from 'dayjs'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import Animated, {
	measure,
	runOnUI,
	useAnimatedRef,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
	withTiming
} from 'react-native-reanimated'
import Chevron from './Chevron'
import ExcellentMarkSvg from './exams-results-svg/ExcellentMarkSvg'
import FailMarkSvg from './exams-results-svg/FailMarkSvg'

const ExamResultItem: FC<{ result: IStudentExamResult }> = ({ result }) => {
	const heightValue = useSharedValue(0)
	const listRef = useAnimatedRef()
	const open = useSharedValue(false)
	const progress = useDerivedValue(() =>
		open.value ? withTiming(0) : withTiming(1)
	)

	const heightAnimationStyle = useAnimatedStyle(() => ({
		height: heightValue.value,
		overflow: 'hidden'
	}))

	const handlePress = () => {
		runOnUI(() => {
			'worklet'
			if (heightValue.value === 0 && listRef) {
				const measured = measure(listRef)
				if (measured?.height)
					heightValue.value = withTiming(measured.height, { duration: 300 })
				else heightValue.value = withTiming(48)
			} else heightValue.value = withTiming(0, { duration: 300 })

			open.value = !open.value
		})()
	}

	return (
		<Pressable
			className='bg-white pl-5 pt-3 mb-3.5'
			onPress={handlePress}
			key={result.id}
		>
			<Chevron progress={progress} />
			<View>
				<ProTextMedium
					className='text-light-graphics-blue text-xs pr-5'
					style={{ letterSpacing: 0.12 }}
					text={examTypeTranslation(result.type).toUpperCase()}
				/>
				<ProTextMedium
					className='text-light-label-primary my-1 pr-5'
					style={{ letterSpacing: -0.08 }}
					text={result.finalTest.discipline.name}
				/>
				<ProTextRegular
					className='text-light-graphics-gray pb-3 pr-5'
					style={{ letterSpacing: -0.08 }}
					text={shortenName(result.finalTest.teacher.user.fullName)}
				/>
			</View>
			<Animated.View style={[heightAnimationStyle]}>
				<Animated.View ref={listRef}>
					<View
						className={`flex-row items-center ${result.finalTest.date && examResultTranslation(result.result) !== EnumExamResult.none ? 'py-2' : 'py-3'}`}
						style={{
							borderTopWidth: 0.5,
							borderTopColor: 'rgba(60, 60, 67, 0.13)'
						}}
					>
						{result.finalTest.date ? (
							<>
								{examResultTranslation(result.result) !==
									EnumExamResult.none && (
									<>
										{examResultTranslation(result.result) ===
											EnumExamResult.not_credited ||
										examResultTranslation(result.result) ===
											EnumExamResult.fail ? (
											<FailMarkSvg />
										) : (
											<ExcellentMarkSvg
												resultType={result.result}
												examType={result.type}
											/>
										)}
										<ProTextRegular
											className='text-light-label-primary ml-3'
											style={{ letterSpacing: -0.08 }}
											text={`${examResultTranslation(result.result)}`}
										/>
									</>
								)}
								<ProTextRegular
									className='text-light-graphics-gray'
									style={{ letterSpacing: -0.08 }}
									text={
										result.finalTest.date &&
										examResultTranslation(result.result) !== EnumExamResult.none
											? ` (${dayjs(result.finalTest.date).format(
													'D MMMM YYYY'
												)})`
											: dayjs(result.finalTest.date).format(
													'D MMMM YYYY, HH:mm, '
												) + `Ауд. ${result.finalTest?.room?.name}`
									}
								/>
							</>
						) : (
							<ProTextRegular
								className='text-light-graphics-gray'
								style={{ letterSpacing: -0.08 }}
								text='Дата испытания не назначена'
							/>
						)}
					</View>
				</Animated.View>
			</Animated.View>
		</Pressable>
	)
}

export default ExamResultItem
