import React, { FC } from 'react'
import { IMenuItem } from '@components/layout/Navigation/MenuContainer/menu.types'
import Link from 'next/link'
import MenuIcon from '@components/layout/Navigation/MenuContainer/MenuIcon'

import styles from './Menu.module.scss'
import { useRouter } from 'next/router'

const MenuItem: FC<{item: IMenuItem}> = ({ item }) => {
	const { pathname } = useRouter()

	return (
		<li
			className={`${styles.item} ${
				pathname === item.link ? `${styles.active}` : ''
			}`}
		>
			<Link className="flex gap-1 items-center" href={item.link}>
				<MenuIcon icon={item.icon} />
				<p>{item.title}</p>
			</Link>
		</li>
	)
}

export default MenuItem
