import { getRatingUrl } from '@config/api.config'
import axios from '../api/interseptors'

export const RatingService = {
	async setRating(movieId: string, value: number) {
		return axios.post<string>(getRatingUrl('/set-rating'), {
			movieId,
			value,
		})
	},
	async getUserMovieRating(id: string) {
		return axios.get<{ rating: number }>(getRatingUrl(`/${id}`))
	},
}
