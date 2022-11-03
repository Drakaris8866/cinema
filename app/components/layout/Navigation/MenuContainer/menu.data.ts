import { IMenu } from '@components/layout/Navigation/MenuContainer/menu.types'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			title: 'Home',
			link: '/',
			icon: 'MdHome',
		},
		{
			title: 'Discovery',
			link: '/genres',
			icon: 'MdExplore',
		},
		{
			title: 'Fresh movies',
			link: '/fresh',
			icon: 'MdRefresh',
		},
		{
			title: 'Trending now',
			link: '/trending',
			icon: 'MdLocalFireDepartment',
		},
	],
}
