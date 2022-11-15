import React, { FC } from 'react'
import Search from '@components/layout/Sidebar/Search/Search'
import MoviesContainer from '@components/layout/Sidebar/MoviesConatainer/MoviesContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
