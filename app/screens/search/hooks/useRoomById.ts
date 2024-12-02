import { roomService } from '@/services/room.service'
import type { IRoom } from '@/shared/types/room.interface'
import { useQuery } from '@tanstack/react-query'

export const useRoomById = (roomId: string) => {
	const {
		data: room,
		isFetching,
		isPending
	} = useQuery({
		queryKey: ['get room by id'],
		queryFn: () => roomService.getById(roomId),
		enabled: !!roomId,
		initialData: {} as IRoom
	})

	return { room, isFetching, isPending }
}
