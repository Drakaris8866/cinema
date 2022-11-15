import {
	getActorsUrl,
	getGenresUrl,
	getMoviesUrl,
	getUsersUrl,
} from '@config/api.config'
import axios, { axiosClassic } from '../api/interseptors'
import { IUser } from '@shared/auth.types'
import { IActorEditInput } from '@screens/admin/Genres/Edit/genre-edit.interface'
import { IGenre, IMovie } from '@shared/movies.types'
import { IProfileInput } from '@screens/profile/profile.interface'
import { IUserEditInput } from '@screens/admin/Users/Edit/user-edit.interface'

export const UsersService = {
	async getUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
	async getProfile() {
		return axios.get<IUser>(getUsersUrl('/profile'))
	},
	async getUserFavoritesMovie() {
		return axios.get<IMovie[]>(getUsersUrl(`/profile/favorites`))
	},
	async getUser(id: string) {
		return axios.get<IUser>(getUsersUrl(`/${id}`))
	},
	async updateUser(_id: string, data: IUserEditInput) {
		return axios.put<string>(getUsersUrl(`/${_id}`), data)
	},
	async toggleFavorite(movieId: string) {
		return axios.post(getUsersUrl('/profile/favorites'), { movieId })
	},
	async updateProfile(data: IProfileInput) {
		return axios.put<IGenre>(getUsersUrl('/profile'), data)
	},
	async deleteUser(_id: string) {
		return axios.delete<string>(getUsersUrl(`/${_id}`))
	},
}
