import {
	BooksSvg,
	ChatSvg,
	ClockSvg,
	FireSvg,
	HandsAltSvg,
	HandsSvg,
	LogoCenterSvg,
	ManGlassesSvg,
	NotificationsSvg,
	SearchSvg,
	UniverSvg,
	WomanGlassesSvg
} from '../onboarding-svg'

export const SVGComponents: { [key: number]: JSX.Element[] } = {
	0: [
		<HandsSvg key='HandsSvg' />,
		<HandsAltSvg key='HandsAltSvg' />,
		<LogoCenterSvg key='LogoCenterSvg' />
	],
	1: [
		<WomanGlassesSvg key='WomanGlassesSvg' />,
		<SearchSvg key='SearchSvg' />,
		<UniverSvg key='UniverSvg' />
	],
	2: [
		<ClockSvg key='ClockSvg' />,
		<FireSvg key='FireSvg' />,
		<NotificationsSvg key='NotificationsSvg' />
	],
	3: [
		<ManGlassesSvg key='ManGlassesSvg' />,
		<BooksSvg key='BooksSvg' />,
		<ChatSvg key='ChatSvg' />
	]
}
