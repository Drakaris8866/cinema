import { getAdminUrl } from '@config/url.config'
import { IMovieEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'
import { MovieService } from '@services/movies.service'
import { getKeys } from '@utils/object/getKeys'
import { toastrError } from '@utils/toastr-error'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

export const useMovieEdit = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter()

	const queryId = String(query.id)

	const { isLoading } = useQuery(
		['get movie by id', queryId],
		() => MovieService.getMovieById(queryId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.update(queryId, data),
		{
			onError(error) {
				toastrError(error, 'Update movie')
			},
			onSuccess() {
				toastr.success('Update movie', 'update was successful')
				push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
