import Menu from '@components/layout/Navigation/MenuContainer/Menu'
import { firstMenu } from '@components/layout/Navigation/MenuContainer/menu.data'
import GenreMenu from '@components/layout/Navigation/MenuContainer/GenreMenu/GenreMenu'

const MenuContainer = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={{ title: 'General', items: [] }} />
		</div>
	)
}

export default MenuContainer
