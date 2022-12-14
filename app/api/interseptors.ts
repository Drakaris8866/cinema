import { API_SERVER_URL, API_URL } from '@config/api.config'
import { removeTokensStorage } from '@services/auth/auth.helper'
import { AuthService } from '@services/auth/auth.service'
import { logout } from '@store/user/user.actions'
import axios from 'axios'
import Cookies from 'js-cookie'

import { errorCatch, getContentType } from './api.helper'
import { IS_PRODUCTION } from '@config/constants'

export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})

export const instance = axios.create({
	baseURL: 'https://cinema-puce.vercel.app/api',
	headers: getContentType(),
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})
instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 404 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensStorage()
					logout()
				}
			}
			throw error
		}
	}
)

export default instance
