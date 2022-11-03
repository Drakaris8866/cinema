import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '@services/movies.service'
import { useDebounces } from '@hooks/useDebounces'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounces(searchTerm, 700)

	const { data, isSuccess } = useQuery(
		['search movie', debounceSearch],
		() => MovieService.getAll(debounceSearch),
		{
			select: ({ data }) => data,
			enabled: !!debounceSearch,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { searchTerm, handleSearch, data, isSuccess }
}
