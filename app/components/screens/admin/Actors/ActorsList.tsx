import SearchField from '@components/layout/Sidebar/Search/SearchField'
import { useActors } from '@screens/admin/Actors/useActors'
import Heading from '@ui/heading/Heading'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import AdminTable from '@ui/admin-table/AdminTable'
import Button from '@ui/form-elements/Button'
import Meta from '@utils/Meta/Meta'
import React, { FC } from 'react'

const ActorsList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useActors()

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" className="mb-4" />
			<div className="flex justify-between">
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				<Button onClick={() => createAsync()}>Create new</Button>
			</div>
			<AdminTable
				headerItems={['Name', 'Slug', 'Actions']}
				removeHandler={deleteAsync}
				tableItems={data || []}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default ActorsList
