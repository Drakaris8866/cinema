import { getMoviesUrl } from '@config/api.config'
import { IMovieEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'
import { IMovie } from '@shared/movies.types'

import axios, { axiosClassic } from '../api/interseptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getPopularMovie(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getMovieById(id: string) {
		return axios.get<IMovie>(getMoviesUrl(`/${id}`))
	},
	async getMostPopularMovie() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)

		return movies
	},
	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl(`/by-genres`), {
			genreIds,
		})
	},
	async getByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},
	async update(_id: string, data: IMovieEditInput) {
		return axios.put<IMovie>(getMoviesUrl(`/${_id}`), data)
	},
	async updateCountOpened(slug: string) {
		return axios.post(getMoviesUrl(`/update-count-opened`), {slug})
	},
	async create() {
		return axios.post<string>(getMoviesUrl(``))
	},
	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},
}
