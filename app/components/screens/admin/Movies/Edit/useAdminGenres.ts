import { useQuery } from 'react-query'
import { GenreService } from '@services/genres.service'
import { IOption } from '@ui/form-elements/Select/slect.interface'
import { toastrError } from '@utils/toastr-error'

export const useAdminGenres = () => {
	const queryData = useQuery(
		'get genre list for movie',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data.map(
					(genre): IOption => ({
						value: genre._id,
						label: genre.name,
					})
				),
			onError(error) {
				toastrError(error, 'genre list for movie')
			},
		}
	)

	return queryData
}
