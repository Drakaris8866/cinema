import { getGenresUrl } from '@config/api.config'
import { IGenre } from '@shared/movies.types'
import axios, { axiosClassic } from '../api/interseptors'
import { IGenreEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl('/popular'), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},

	async getGenreById(id: string) {
		return axios.get<IGenre>(getGenresUrl(`/${id}`))
	},
	async update(id: string, data: IGenreEditInput) {
		return axios.put<IGenre>(getGenresUrl(`/${id}`), data)
	},
	async create() {
		return axios.post<string>(getGenresUrl(``))
	},
	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}
