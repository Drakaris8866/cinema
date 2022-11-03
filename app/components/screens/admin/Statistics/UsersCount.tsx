import { FC } from 'react'
import { NextPageAuth } from '@shared/auth.types'
import styles from '@screens/admin/Statistics/Statistic.module.scss'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useQuery } from 'react-query'
import { AdminService } from '@services/admin/admin.service'
const UsersCount: NextPageAuth = () => {

	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={`${styles.block} ${styles.popular}`}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
				<div className={styles.description}>users</div>
			</div>
		</div>
	)
}
export default UsersCount