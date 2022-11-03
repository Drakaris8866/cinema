import { FC } from 'react'
import UsersCount from '@screens/admin/Statistics/UsersCount'
import MostPopularMovie from '@screens/admin/Statistics/MostPopularMovie'
import styles from './Statistic.module.scss'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<UsersCount />
			<MostPopularMovie />
		</div>
	)
}

export default Statistics
