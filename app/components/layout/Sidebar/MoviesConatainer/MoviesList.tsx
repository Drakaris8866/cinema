import React, { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import MovieItem from '@components/layout/Sidebar/MoviesConatainer/MovieItem'
import SeeMore from '@components/layout/Sidebar/MoviesConatainer/SeeMore'

import styles from './MovieList.module.scss'

const MoviesList: FC<{ movies: IMovie[]; link: string }> = ({
	movies,
	link,
}) => {
	return (
		<>
			<div className={styles.list}>
				{movies.map((movie) => (
					<MovieItem key={movie.slug} {...movie} />
				))}
			</div>
			<SeeMore link={link} />
		</>
	)
}

export default MoviesList
