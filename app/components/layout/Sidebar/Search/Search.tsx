import React from 'react'
import SearchField from '@components/layout/Sidebar/Search/SearchField'
import { useSearch } from '@components/layout/Sidebar/Search/useSearch'
import SearchList from '@components/layout/Sidebar/Search/SearchList'

const Search = () => {
	const { searchTerm, handleSearch, data, isSuccess } = useSearch()

	return (
		<div>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} isSuccess={isSuccess} />}
		</div>
	)
}

export default Search
