import React, { FC } from 'react'
import Search from '@components/layout/Sidebar/Search/Search'
import MoviesContainer from '@components/layout/Sidebar/MoviesConatainer/MoviesContainer'

const Sidebar: FC = () => {
	return (
		<div className="p-layout">
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar
