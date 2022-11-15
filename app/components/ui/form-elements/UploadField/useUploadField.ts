import { FileService } from '@services/file.service'
import { toastrError } from '@utils/toastr-error'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUploadField: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)

	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess({ data }) {
				onChange(data[0].url)
			},
			onError(error) {
				toastrError(error, 'Upload image')
			},
		}
	)

	const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
		setIsLoading(true)
		const files = e.target.files
		if (files?.length) {
			const formData = new FormData()
			formData.append('image', files[0])
			await mutateAsync(formData)

			setTimeout(() => setIsLoading(false), 1000)
		}
	}

	return useMemo(
		() => ({
			uploadImage,
			isLoading,
		}),
		[isLoading, uploadImage]
	)
}
