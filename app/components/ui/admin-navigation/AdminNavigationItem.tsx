import { FC } from 'react'
import { IAdminNavigationData } from '@ui/admin-navigation/admin-navigation.types'
import Link from 'next/link'
import styles from './AdminNavigation.module.scss'
import { useRouter } from 'next/router'

const AdminNavigationItem: FC<{ item: IAdminNavigationData }> = ({ item: { link, title } }) => {

	const { asPath } = useRouter()

	return (
		<li>
			<Link
				className={`${styles.item} ${asPath === link && `${styles.active}`}`}
				href={`${link}`}
					>
					{ title }
					</Link>
					</li>
					)
				}

				export default AdminNavigationItem