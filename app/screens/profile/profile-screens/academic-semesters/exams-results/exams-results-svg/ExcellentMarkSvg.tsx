import { COLORS } from '@/constants/colors.constants'
import { EnumExamType } from '@/shared/types/final-test.interface'
import {
	EnumExamResult,
	examResultTranslation,
	examTypeTranslation
} from '@/shared/types/student-exam-result.interface'
import React, { FC } from 'react'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

const ExcellentMarkSvg: FC<{ resultType: string; examType: string }> = ({
	resultType,
	examType
}) => (
	<Svg width={30} height={30} fill='none'>
		<Defs>
			<ClipPath id='b'>
				<Path fill='#fff' fillOpacity={0} d='M3 3h24v24H3z' />
			</ClipPath>
			<ClipPath id='a'>
				<Rect width={30} height={30} fill='#fff' fillOpacity={0} rx={7} />
			</ClipPath>
		</Defs>
		<Rect
			width={30}
			height={30}
			fill={
				examResultTranslation(resultType) === EnumExamResult.excellent
					? '#3bdd63'
					: examTypeTranslation(examType) === EnumExamType.credit ||
						  examTypeTranslation(examType) === EnumExamType.referat
						? '#3bdd63'
						: examResultTranslation(resultType) === EnumExamResult.satisfactory
							? '#5AC8FA'
							: COLORS.light.graphics.orange
			}
			rx={7}
		/>
		<G clipPath='url(#a)'>
			<G clipPath='url(#b)'>
				<Path
					fill='#FFF'
					d='M13.24 22c.45 0 .79-.18 1.04-.53l7.98-11.83c.17-.26.24-.48.24-.7 0-.56-.4-.94-1-.94-.41 0-.66.13-.92.51l-7.37 11.14-3.81-4.64c-.24-.32-.5-.45-.87-.45-.59 0-1.03.41-1.03.96 0 .25.1.48.31.73l4.4 5.23c.29.35.61.52 1.03.52Z'
				/>
			</G>
		</G>
	</Svg>
)
export default ExcellentMarkSvg
