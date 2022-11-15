import GenreEdit from '@screens/admin/Genres/Edit/GenreEdit'
import { NextPageAuth } from '@shared/auth.types'
import React from 'react'


const EditPage: NextPageAuth = () => {
	return (
		<div>
			<GenreEdit/>
		</div>
	)
}

EditPage.isOnlyAdmin = true

export default EditPage