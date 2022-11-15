import MenuItem from '@components/layout/Navigation/MenuContainer/MenuItem'
import { IMenu } from '@components/layout/Navigation/MenuContainer/menu.types'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'

import styles from './Menu.module.scss'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr: false,
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<p className={styles.title}>{title}</p>
			<ul>
				{items.map((item) => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu