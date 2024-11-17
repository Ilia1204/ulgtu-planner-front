export interface ISlide {
	_id: number
	title: string
	description: string
	image?: () => JSX.Element
}
