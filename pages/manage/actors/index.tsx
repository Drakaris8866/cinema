import React from 'react'
import { NextPageAuth } from '@shared/auth.types'
import ActorsList from '@screens/admin/Actors/ActorsList'

const ActorsPage: NextPageAuth = () => {
	return (
		<ActorsList/>
	)
}
ActorsPage.isOnlyAdmin = true

export default ActorsPage