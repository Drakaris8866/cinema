import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { ITableItem } from '@ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@config/url.config'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { useDebounces } from '@hooks/useDebounces'
import { ActorsService } from '@services/actors.service'
import { useRouter } from 'next/router'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounces(searchTerm, 500)

	const { push } = useRouter()

	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => ActorsService.getActors(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`actors/edit/${user._id}`),
						items: [user.name, user.slug],
					})
				),
			onError(error) {
				toastrError(error, 'actors list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actors',
		(actorId: string) => ActorsService.deleteActor(actorId),
		{
			onError(error) {
				toastrError(error, 'Delete actors')
			},
			onSuccess() {
				toastr.success('Delete actors', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorsService.create(),
		{
			onError(error) {
				toastrError(error, 'Create actor')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create actor', 'Create was successful')
				push(getAdminUrl(`actors/edit/${_id}`))
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
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
