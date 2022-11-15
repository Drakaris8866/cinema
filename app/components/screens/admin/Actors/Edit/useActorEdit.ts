import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { toastrError } from '@utils/toastr-error'
import { IActorEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@config/url.config'
import { getKeys } from '@utils/object/getKeys'
import { ActorsService } from '@services/actors.service'

export const useActorEdit = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter()

	const queryId = String(query.id)

	const { isLoading } = useQuery(
		['get actor by id', queryId],
		() => ActorsService.getActorById(queryId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get actor')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorsService.update(queryId, data),
		{
			onError(error) {
				toastrError(error, 'Update actor')
			},
			onSuccess() {
				toastr.success('Update actor', 'update was successful')
				push(getAdminUrl('actors'))
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
