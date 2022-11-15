import React from 'react'
import { NextPageAuth } from '@shared/auth.types'
import GenresList from '@screens/admin/Genres/GenresList'

const GenresPage: NextPageAuth = () => {
	return (
		<GenresList/>
	)
}

GenresPage.isOnlyAdmin = true

export default GenresPage