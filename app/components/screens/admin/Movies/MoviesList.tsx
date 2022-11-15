import React, { FC } from 'react'
import Heading from '@ui/heading/Heading'
import SearchField from '@components/layout/Sidebar/Search/SearchField'
import AdminTable from '@ui/admin-table/AdminTable'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import Meta from '@utils/Meta/Meta'
import { useMovies } from '@screens/admin/Movies/useMovies'
import Button from '@ui/form-elements/Button'

const MoviesList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useMovies()

	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" className="mb-4" />
			<div className="flex justify-between">
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				<Button onClick={() => createAsync()}>Create new</Button>
			</div>
			<AdminTable
				headerItems={['Title', 'Count opened', 'Actions']}
				removeHandler={deleteAsync}
				tableItems={data || []}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default MoviesList
