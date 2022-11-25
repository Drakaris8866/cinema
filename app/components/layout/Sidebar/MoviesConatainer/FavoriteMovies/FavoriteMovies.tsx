import React from 'react'
import { useQuery } from 'react-query'
import MoviesList from '@components/layout/Sidebar/MoviesConatainer/MoviesList'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { UsersService } from '@services/users.service'
import { useAuth } from '@hooks/useAuth'

const FavoriteMovie = () => {
	const { isLoading, data: favoriteMovies } = useQuery(
		'favorite movie',
		() => UsersService.getUserFavoritesMovie(),
		{
			select: ({ data }) => data.slice(0, 3),
		}
	)
	const { user } = useAuth()
	return !isLoading ? (
		<>
			<h2 className="text-2lg my-3">Favorite Movies</h2>
			{user ? (
				<MoviesList link="/favorites" movies={favoriteMovies || []} />
			) : (
				<div className="py-5 px-7 bg-gray-800 rounded-2xl text-lg">You are not authorized</div>
			)}
		</>
	) : (
		<SkeletonLoader count={3} className="h-28 mb-4" />
	)
}

export default FavoriteMovie
