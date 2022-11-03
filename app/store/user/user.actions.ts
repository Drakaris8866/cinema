import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from '@shared/auth.types'
import { AuthService } from '@services/auth/auth.service'
import { toastr } from 'react-redux-toastr'
import { toastrError } from '@utils/toastr-error'
import { errorCatch } from '../../api/api.helper'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed registration')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed login')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})
export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()

			return response.data
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				thunkAPI.dispatch(logout())
				toastr.error(
					'Logout',
					'Your authorization is finished< please sign in again'
				)
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
