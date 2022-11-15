import React, { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import Image from 'next/image'
import Link from 'next/link'

import styles from './SearchList.module.scss'
import { getMovieUrl } from '@config/url.config'

const SearchList: FC<{ movies: IMovie[]; isSuccess: boolean }> = ({
	movies,
	isSuccess,
}) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link
						key={movie._id}
						href={getMovieUrl(movie.slug)}
						className={styles.item}
					>
						<Image
							src={movie.poster}
							alt={movie.title}
							height={50}
							width={50}
							className="rounded-image"
						/>
						<div className={styles.content}>
							<div className={styles.title}>{movie.title}</div>
							<div className={styles.duration}>
								Duration: {movie.parameters.duration} m.
							</div>
						</div>
					</Link>
				))
			) : (
				<div className="bg-gray-800 px-6 py-2 rounded-lg">Movies not found</div>
			)}
		</div>
	)
}

export default SearchList
