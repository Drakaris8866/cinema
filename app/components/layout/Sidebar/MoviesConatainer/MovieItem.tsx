import React, { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import Link from 'next/link'
import Image from 'next/image'
import { getMovieUrl } from '@config/url.config'
import { MdStarRate } from 'react-icons/md'

import styles from './MovieItem.module.scss'

const MovieItem: FC<IMovie> = ({ title, genres, rating, poster, slug }) => {
	return (
		<Link href={getMovieUrl(slug)} className={styles.item}>
			<Image width={50} height={50} src={poster} alt={title} />
			<div className={styles.content}>
				<div>
					<div className={styles.title}>{title}</div>
					<div className={styles.genre}>{genres[0].name}</div>
				</div>
				<div className={styles.rating}>
					<MdStarRate />
					<div>{rating.toFixed(1)}</div>
				</div>
			</div>
		</Link>
	)
}

export default MovieItem
