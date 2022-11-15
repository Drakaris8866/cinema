import MovieEdit from '@screens/admin/Movies/Edit/MovieEdit'
import { NextPageAuth } from '@shared/auth.types'
import React from 'react'

const EditPage: NextPageAuth = () => {
	return (
		<div>
			<MovieEdit />
		</div>
	)
}

EditPage.isOnlyAdmin = true

export default EditPage
