import React from 'react'
import { NextPageAuth } from '@shared/auth.types'
import UserList from '@screens/admin/Users/UserList'

const UsersPage: NextPageAuth = () => {
	return (
		<UserList/>
	)
}

UsersPage.isOnlyAdmin = true

export default UsersPage