import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'
import { UsersService } from '@services/users.service'
import { IProfileInput } from '@screens/profile/profile.interface'

export const useProfile = (setValue: UseFormSetValue<any>) => {
	const { isLoading } = useQuery(
		'get user profile',
		() => UsersService.getProfile(),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email)
			},
			onError: (error) => {
				toastrError(error, 'Get profile')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'update profile',
		(data: IProfileInput) => UsersService.updateProfile(data),
		{
			onError(error) {
				toastrError(error, 'Update profile')
			},
			onSuccess() {
				toastr.success('Update profile', 'update was successful')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput | any> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
