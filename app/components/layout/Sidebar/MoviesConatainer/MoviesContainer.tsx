import React, { FC } from 'react'
import PopularMovie from '@components/layout/Sidebar/MoviesConatainer/PopularMovie'
import FavoriteMovie from '@components/layout/Sidebar/MoviesConatainer/FavoriteMovies/FavoriteMovies'

const MoviesContainer: FC = () => {
	return (
		<div className="flex flex-col mt-6">
			<PopularMovie />
			<FavoriteMovie />
		</div>
	)
}

export default MoviesContainer
