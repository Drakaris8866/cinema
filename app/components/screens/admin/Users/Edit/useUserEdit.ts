import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useMutation, useQuery } from 'react-query'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { getAdminUrl } from '@config/url.config'
import { UsersService } from '@services/users.service'
import { IUserEditInput } from '@screens/admin/Users/Edit/user-edit.interface'

export const useUserEdit = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter()

	const userId = String(query.id)

	const { isLoading } = useQuery(
		['user', userId],
		() => UsersService.getUser(userId),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
				setValue('isAdmin', data.isAdmin)
			},
			onError(error) {
				toastrError(error, 'Get user')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update user',
		(data: IUserEditInput) => UsersService.updateUser(userId, data),
		{
			onError(error) {
				toastrError(error, 'Update user')
			},
			onSuccess() {
				toastr.success('Update user', 'update was successful')
				push(getAdminUrl('users'))
			},
		}
	)

	const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
