import { API_URL, getAuthUrl } from '@config/api.config'
import { IAuthResponse } from '@shared/auth.types'
import { getContentType } from '../../api/api.helper'
import { removeTokensStorage, saveToStorage } from '@services/auth/auth.helper'
import { axiosClassic } from '../../api/interseptors'
import Cookies from 'js-cookie'
import axios from 'axios'

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/register')}`,
			{ email, password }
		)
		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login')}`,
			{ email, password }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}
		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access-token')}`,
			{ refreshToken },
			{ headers: getContentType() }
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
}
