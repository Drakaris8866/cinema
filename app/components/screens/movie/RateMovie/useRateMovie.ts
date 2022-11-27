import { useMutation, useQuery } from 'react-query'
import { RatingService } from '@services/rating.service'
import { useState } from 'react'
import { toastrError } from '@utils/toastr-error'
import { toastr } from 'react-redux-toastr'

export const useRateMovie = (movieID: string) => {
	const [rating, setRating] = useState(0)
	const [isSended, setIsSended] = useState(false)

	const { refetch } = useQuery(
		'your movie rating',
		() => RatingService.getUserMovieRating(movieID),
		{
			onSuccess({ data }) {
				setRating(+data)
			},
			enabled: !!movieID,
		}
	)

	const { mutateAsync: rateMovie } = useMutation(
		'set rating movie',
		({ value }: { value: number }) => RatingService.setRating(movieID, value),
		{
			onError(error) {
				toastrError(error, 'Rate movie')
			},
			onSuccess() {
				toastr.success('Rate movie', 'You have successfully rated!')

				setIsSended(true)
				refetch()

				setTimeout(() => {
					setIsSended(false)
				}, 2400)
			},
		}
	)

	const handleClick = async (nextValue: number) => {
		setRating(nextValue)
		await rateMovie({ value: nextValue })
	}

	return {
		isSended,
		rating,
		handleClick,
	}
}