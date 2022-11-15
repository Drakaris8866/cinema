import { FC } from 'react'
import { useQuery } from 'react-query'
import { IMovie } from '@shared/movies.types'
import { MovieService } from '@services/movies.service'
import Image from 'next/image'

import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import Link from 'next/link'
import { getMovieUrl } from '@config/url.config'
import Heading from '@ui/heading/Heading'
import styles from './Statistic.module.scss'

const MostPopularMovie: FC = () => {
	const { data: movie, isLoading } = useQuery(
		'Get most popular movie admin',
		async () => {
			return await MovieService.getMostPopularMovie()
		},
		{ select: (data): IMovie => data[0] }
	)

	return (
		<div className={`${styles.block} ${styles.popular}`}>
			<div title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<Heading title={movie.title} />
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<Image
								width={285}
								height={176}
								src={movie.bigPoster}
								alt={movie.title}
								className={styles.image}
								unoptimized
							/>
						</Link>
					</>
				)
			)}
		</div>
	)
}

export default MostPopularMovie
