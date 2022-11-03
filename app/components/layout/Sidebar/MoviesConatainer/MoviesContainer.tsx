import React, { FC } from 'react'
import PopularMovie from '@components/layout/Sidebar/MoviesConatainer/PopularMovie'
import NotAuthFavorites from '@components/layout/Sidebar/MoviesConatainer/FavoriteMovies/NotAuthFavorites'

const MoviesContainer: FC = () => {
	return (
		<div className="flex flex-col mt-6">
			<PopularMovie />
			<NotAuthFavorites />
		</div>
	)
}

export default MoviesContainer
