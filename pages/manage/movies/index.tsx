import React from 'react'
import { NextPageAuth } from '@shared/auth.types'
import MoviesList from '@screens/admin/Movies/MoviesList'

const MoviesPage: NextPageAuth = () => {
	return <MoviesList />
}

MoviesPage.isOnlyAdmin = true

export default MoviesPage