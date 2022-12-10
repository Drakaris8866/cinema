import { useMutation, useQuery } from 'react-query'
import { UsersService } from '@services/users.service'
import { useEffect, useState } from 'react'
import { toastrError } from '@utils/toastr-error'

export const useFavoriteBtn = (movieID: string) => {
	const [favoriteMovie, setFavoriteMovie] = useState(false)

	const {
		data: favoriteMovies,
		refetch,
	} = useQuery('favorite movie', () => UsersService.getUserFavoritesMovie(), {
		select: ({ data }) => data,
	})

	useEffect(() => {
		if (!favoriteMovies) return
		favoriteMovies.some((m) => m._id === movieID) && setFavoriteMovie(true)
	}, [favoriteMovies, movieID])

	const { mutateAsync, isLoading } = useMutation(
		'update favorite status',
		() => UsersService.toggleFavorite(movieID),
		{
			onError(error) {
				toastrError(error, 'Update favorite list')
			},
			onSuccess() {
				setFavoriteMovie(!favoriteMovie)
				refetch()
			},
		}
	)

	return {
		favoriteMovie,
		mutateAsync,
		isLoading
	}
}
