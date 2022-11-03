import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { reducer as userReducer } from './user/user.slice'

const rootReducer = combineReducers({
	user: userReducer,
	toastr: toastrReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
