import React from 'react'
import { useQuery } from 'react-query'
import MoviesList from '@components/layout/Sidebar/MoviesConatainer/MoviesList'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { UsersService } from '@services/users.service'

const FavoriteMovie = () => {
	const { isLoading, data: favoriteMovies } = useQuery(
		'favorite movie',
		() => UsersService.getUserFavoritesMovie(),
		{
			select: ({ data }) => data.slice(0, 3),
		}
	)

	return !isLoading ? (
		<>
			<h2 className="text-2lg my-3">Favorite Movies</h2>
			<MoviesList link="/trending" movies={favoriteMovies || []} />
		</>
	) : (
		<SkeletonLoader count={3} className="h-28 mb-4" />
	)
}

export default FavoriteMovie
