import { ProTextRegular } from '@/components'
import ProTextSemiBold from '@/components/ui/custom-texts/ProTextSemiBold'
import { COLORS } from '@/constants/colors.constants'
import UserSvg from '@/navigation/bottom-menu/bottom-menu-svg/UserSvg'
import { IEmploymentInfo } from '@/shared/types/employment-info.interface'
import { IGroup } from '@/shared/types/group.interface'
import { IRoom, roomTypeTranslation } from '@/shared/types/room.interface'
import React, { FC } from 'react'
import { View } from 'react-native'
import GroupSvg from './search-svg/GroupSvg'
import RoomSvg from './search-svg/RoomSvg'

interface ISearchItemHeader {
	teacher: IEmploymentInfo
	room: IRoom
	group: IGroup
}

const SearchItemHeader: FC<ISearchItemHeader> = ({ teacher, room, group }) => {
	return (
		<View className='bg-white p-5 flex-row items-center'>
			<View className='flex-1'>
				<ProTextSemiBold
					className='text-light-graphics-blue text-xs'
					style={{ letterSpacing: 0.06 }}
					text={
						teacher
							? teacher?.position?.toUpperCase()
							: room
								? roomTypeTranslation(room?.type)?.toUpperCase()
								: 'ГРУППА'
					}
				/>
				<ProTextSemiBold
					className='text-light-label-primary mt-1.5'
					style={{ letterSpacing: -0.08 }}
					text={
						teacher ? teacher?.user?.fullName : room ? room.name : group.name
					}
				/>
				<ProTextRegular
					className='text-light-graphics-gray mt-1'
					style={{ letterSpacing: -0.08 }}
					text={
						teacher
							? teacher?.user?.email
							: room
								? room.address
								: group?.flow?.faculty
					}
				/>
			</View>
			<View
				className='w-16 h-16 rounded-full bg-light-graphics-gray6 justify-center items-center'
				style={{ elevation: 3 }}
			>
				{teacher ? (
					<UserSvg color={COLORS.light.graphics.gray} />
				) : room ? (
					<RoomSvg />
				) : (
					<GroupSvg />
				)}
			</View>
		</View>
	)
}

export default SearchItemHeader
