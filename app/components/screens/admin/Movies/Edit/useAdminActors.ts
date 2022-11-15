import { useQuery } from 'react-query'
import { IOption } from '@ui/form-elements/Select/slect.interface'
import { toastrError } from '@utils/toastr-error'
import { ActorsService } from '@services/actors.service'

export const useAdminActors = () => {
	const queryData = useQuery(
		'get actor list for movie',
		() => ActorsService.getActors(),
		{
			select: ({ data }) =>
				data.map(
					(actor): IOption => ({
						value: actor._id,
						label: actor.name,
					})
				),
			onError(error) {
				toastrError(error, 'actor list for movie')
			},
		}
	)

	return queryData
}
