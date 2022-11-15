import { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import { IGalleryItem } from '@ui/gallery/gallery.interface'
import Heading from '@ui/heading/Heading'
import Banner from '@ui/banner/Banner'
import Gallery from '@ui/gallery/Gallery'
import Content from '@screens/movie/Content/Content'

import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from '@screens/movie/useUpdateCountOpened'

const DynamicVideoPlayer = dynamic(
	() => import('@ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)
const DynamicRateMovie = dynamic(
	() => import('./RateMovie/RateMovie'),
	{
		ssr: false,
	}
)

const Movie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
	movie,
	similarMovies,
}) => {

	useUpdateCountOpened(movie.slug)

	return (
		<>
			<Banner
				image={movie.bigPoster}
				Content={() => <Content movie={movie} />}
			/>
			<DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />

			<div>
				<Heading title="Similar" />
				<Gallery items={similarMovies} variant="vertical" />
			</div>

				<DynamicRateMovie movieID={movie._id} slug={movie.slug}/>
		</>
	)
}

export default Movie
