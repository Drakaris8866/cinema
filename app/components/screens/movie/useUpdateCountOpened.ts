import { useMutation } from 'react-query'
import { MovieService } from '@services/movies.service'
import { useEffect } from 'react'

export const useUpdateCountOpened = (slug: string) => {
	const { mutateAsync } = useMutation('update count opened', () =>
		MovieService.updateCountOpened(slug)
	)
	useEffect(() => {
		mutateAsync()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}