import React from 'react'
import { NextPageAuth } from '@shared/auth.types'
import ActorEdit from '@screens/admin/Actors/Edit/ActorEdit'

const EditPage: NextPageAuth = () => {
	return (
		<div>
			<ActorEdit/>
		</div>
	)
}

EditPage.isOnlyAdmin = true

export default EditPage