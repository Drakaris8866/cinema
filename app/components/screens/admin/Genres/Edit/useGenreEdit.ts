import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { GenreService } from '@services/genres.service'
import { toastrError } from '@utils/toastr-error'
import { IGenreEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@config/url.config'
import { getKeys } from '@utils/object/getKeys'
import { IGenre } from '@shared/movies.types'

export const useGenreEdit = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter()

	const queryId = String(query.id)

	const { isLoading } = useQuery(
		['get genre by id', queryId],
		() => GenreService.getGenreById(queryId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get genre')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenreEditInput) => GenreService.update(queryId, data),
		{
			onError(error) {
				toastrError(error, 'Update genre')
			},
			onSuccess() {
				toastr.success('Update genre', 'update was successful')
				push(getAdminUrl('genres'))
			},
		}
	)


	const onSubmit: SubmitHandler<IGenreEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}
