import React, { FC } from 'react'
import Heading from '@ui/heading/Heading'
import SearchField from '@components/layout/Sidebar/Search/SearchField'
import AdminTable from '@ui/admin-table/AdminTable'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import Meta from '@utils/Meta/Meta'
import { useGenres } from '@screens/admin/Genres/useGenres'
import Button from '@ui/form-elements/Button'

const GenresList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync } = useGenres()

	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" className="mb-4" />
			<div className="flex justify-between">
				<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
				<Button onClick={() => createAsync()}>Create new</Button>
			</div>
			<AdminTable
				headerItems={['Genre', 'Slug', 'Actions']}
				removeHandler={deleteAsync}
				tableItems={data || []}
				isLoading={isLoading}
			/>
		</Meta>
	)
}

export default GenresList
