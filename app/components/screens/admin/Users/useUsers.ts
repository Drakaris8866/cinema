import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { UsersService } from '@services/users.service'
import { ITableItem } from '@ui/admin-table/admin-table.interface'
import { getAdminUrl } from '@config/url.config'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { useDebounces } from '@hooks/useDebounces'
import { convertDate } from '@utils/date/convertDate'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounces(searchTerm, 500)

	const queryData = useQuery(
		['user list', debouncedSearch],
		() => UsersService.getUsers(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(user): ITableItem => ({
						_id: user._id,
						editUrl: getAdminUrl(`user/edit/${user._id}`),
						items: [user.email, convertDate(user.createdAt)],
					})
				),
			onError(error) {
				toastrError(error, 'user list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete user',
		(userId: string) => UsersService.deleteUser(userId),
		{
			onError(error) {
				toastrError(error, 'Delete user')
			},
			onSuccess() {
				toastr.success('Delete user', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
		}),
		[queryData, searchTerm, deleteAsync]
	)
}
