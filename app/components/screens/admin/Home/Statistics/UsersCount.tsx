import { NextPageAuth } from '@shared/auth.types'
import styles from '@screens/admin/Home/Statistics/Statistic.module.scss'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useQuery } from 'react-query'
import { AdminService } from '@services/admin.service'

const UsersCount: NextPageAuth = () => {
	const { isLoading, data: response } = useQuery('Count users', async () => {
		return  await AdminService.getCountUsers()
	})
	return (
		<div className={`${styles.block} ${styles.popular}`}>
			<div className={styles.countUsers}>
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