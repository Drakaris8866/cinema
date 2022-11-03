import React, { FC } from 'react'
import Logo from '@components/layout/Navigation/Logo'
import styles from './Navigation.module.scss'
import MenuContainer from '@components/layout/Navigation/MenuContainer/MenuContainer'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
