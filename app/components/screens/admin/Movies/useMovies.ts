import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { ITableItem } from '@ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@config/url.config'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { useDebounces } from '@hooks/useDebounces'
import { MovieService } from '@services/movies.service'
import { useRouter } from 'next/router'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounces(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movies/edit/${movie._id}`),
						items: [movie.title, String(movie.countOpened)],
					})
				),
			onError(error) {
				toastrError(error, 'movies list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError(error) {
				toastrError(error, 'Delete movie')
			},
			onSuccess() {
				toastr.success('Delete movie', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create movie',
		() => MovieService.create(),
		{
			onError(error) {
				toastrError(error, 'Create movie')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create movie', 'Create was successful')
				push(getAdminUrl(`movies/edit/${_id}`))
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
