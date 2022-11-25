import { useQuery } from 'react-query'
import { UsersService } from '@services/users.service'
import { ICollectionItem } from '@ui/collections/collections.interface'

export const useFavorites = () => {
	const {
		data: movies,
		refetch,
		isLoading,
	} = useQuery(
		'get favorites movies',
		() => UsersService.getUserFavoritesMovie(),
		{
			select: ({ data: movies }) =>
				movies.map(
					(movie) =>
						({
							_id: movie._id,
							slug: movie.slug,
							image: movie.bigPoster,
							title: movie.title,
						} as ICollectionItem)
				),
		}
	)

	return { movies, refetch, isLoading }
}
