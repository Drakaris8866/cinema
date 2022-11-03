import React from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '@services/movies.service'
import MoviesList from '@components/layout/Sidebar/MoviesConatainer/MoviesList'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'

const PopularMovie = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'popular movie',
		() => MovieService.getPopularMovie(''),
		{
			select: ({ data }) => data,
		}
	)

	return !isLoading ? (
		<>
			<h2 className="text-2lg mb-3">Popular Movies</h2>
			<MoviesList link="/trending" movies={popularMovies || []} />
		</>
	) : (
		<SkeletonLoader count={3} className="h-28 mb-4" />
	)
}

export default PopularMovie
