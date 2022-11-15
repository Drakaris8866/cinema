import GenreEdit from '@screens/admin/Genres/Edit/GenreEdit'
import { NextPageAuth } from '@shared/auth.types'
import React from 'react'
import UserEdit from '@screens/admin/Users/Edit/UserEdit'


const EditPage: NextPageAuth = () => {
	return (
		<div>
			<UserEdit/>
		</div>
	)
}

EditPage.isOnlyAdmin = true

export default EditPage