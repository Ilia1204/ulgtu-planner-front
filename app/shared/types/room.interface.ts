import { IClass } from './class.interface'
import { IFinalTest } from './final-test.interface'
import type { IBase } from './root.interface'

export interface IRoom extends IBase {
	name: string
	type: EnumRoomType
	address: string

	classes: IClass[]
	finalTests: IFinalTest[]
}

export enum EnumRoomType {
	auditorium = 'Аудитория',
	cabinet = 'Кабинет',
	conference_hall = 'Конференц-зал (Тарелка)',
	lab = 'Лаборатория',
	library = 'Библиотека',
	computer_class = 'Компьютерный класс'
}

export const roomTypeTranslations: Record<string, string> = {
	auditorium: EnumRoomType.auditorium,
	cabinet: EnumRoomType.cabinet,
	conference_hall: EnumRoomType.conference_hall,
	lab: EnumRoomType.lab,
	library: EnumRoomType.library,
	computer_class: EnumRoomType.computer_class
}

export const roomTypeTranslation = (roomType: string) => {
	return roomTypeTranslations[roomType] || 'Неизвестный тип помещения'
}
