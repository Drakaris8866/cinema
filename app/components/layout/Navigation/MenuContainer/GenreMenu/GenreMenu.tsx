import React from 'react'
import { usePopularGenres } from '@components/layout/Navigation/MenuContainer/GenreMenu/usePopularGenres'
import Menu from '@components/layout/Navigation/MenuContainer/Menu'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'

const GenreMenu = () => {
	const { data, isLoading } = usePopularGenres()

	return isLoading ? (
		<SkeletonLoader count={5} className="h-7 mt-6 mx-layout" />
	) : (
		<Menu menu={{ title: 'Popular', items: data || [] }} />
	)
}

export default GenreMenu

