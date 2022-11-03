import { FC } from 'react'
import { adminNavigationItems } from '@ui/admin-navigation/admin-navigation.data'
import AdminNavigationItem from '@ui/admin-navigation/AdminNavigationItem'
import styles from './AdminNavigation.module.scss'

const AdminNavigation: FC = () => {
	return (
		<nav>
			<ul className={styles.items}>
				{adminNavigationItems.map((item) => <AdminNavigationItem key={item.link} item={item}/>)}
			</ul>
		</nav>
	)
}

export default AdminNavigation