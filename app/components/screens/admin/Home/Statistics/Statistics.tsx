import { FC } from 'react'
import UsersCount from '@screens/admin/Home/Statistics/UsersCount'
import MostPopularMovie from '@screens/admin/Home/Statistics/MostPopularMovie'
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
