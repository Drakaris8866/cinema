import React, { FC } from 'react'
import Heading from '@ui/heading/Heading'
import SearchField from '@components/layout/Sidebar/Search/SearchField'
import { useUsers } from '@screens/admin/Users/useUsers'
import AdminTable from '@ui/admin-table/AdminTable'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import Meta from '@utils/Meta/Meta'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" className="mb-4"/>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			<AdminTable
				headerItems={['Email', 'Date register', 'Actions']}
				removeHandler={deleteAsync}
				tableItems={data || []}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default UserList