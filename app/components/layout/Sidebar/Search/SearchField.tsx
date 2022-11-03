import React, { ChangeEvent, FC } from 'react'

import styles from './SearchField.module.scss'
import { MdSearch } from 'react-icons/md'

interface ISearchField {
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.root}>
			<MdSearch className={styles.icon} />
			<input
				onChange={handleSearch}
				value={searchTerm}
				className={styles.input}
				type="text"
				placeholder="Search"
			/>
		</div>
	)
}

export default SearchField
