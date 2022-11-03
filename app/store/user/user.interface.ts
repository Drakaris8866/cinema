export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IUserState {
	email: string
	isAdmin: boolean
}