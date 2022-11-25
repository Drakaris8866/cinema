import { getActorsUrl, getGenresUrl } from '@config/api.config'
import axios, { axiosClassic } from '../api/interseptors'
import { IActor } from '@shared/admin.types'
import { IGenre } from '@shared/movies.types'
import { IActorEditInput, IGenreEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'

export const ActorsService = {
	async getActors(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm
				? {
					searchTerm,
				}
				: {},
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
	},
	async deleteActor(_id: string) {
		return axios.delete<string>(getActorsUrl(`/${_id}`))
	},
	async getActorById(_id: string) {
		return axios.get<IActor>(getActorsUrl(`/${_id}`))
	},
	async update(_id: string, data: IActorEditInput) {
		return axios.put<IGenre>(getActorsUrl(`/${_id}`), data)
	},
	async create() {
		return axios.post<string>(getActorsUrl(``))
	},
}
