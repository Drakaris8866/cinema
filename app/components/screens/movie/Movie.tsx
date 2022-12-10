import { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import { IGalleryItem } from '@ui/gallery/gallery.interface'
import Heading from '@ui/heading/Heading'
import Banner from '@ui/banner/Banner'
import Gallery from '@ui/gallery/Gallery'
import Content from '@screens/movie/Content/Content'

import dynamic from 'next/dynamic'
import { useUpdateCountOpened } from '@screens/movie/useUpdateCountOpened'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'

const DynamicVideoPlayer = dynamic(
	() => import('@ui/video-player/VideoPlayer'),
	{
		ssr: false,
	}
)
const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

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
			<div className="relative">
				<DynamicVideoPlayer className="z-2" slug={movie.slug} videoSource={movie.videoUrl} />
				<div className="absolute h-full w-full -top-1 left-0 z-1"><SkeletonLoader height="100%"/></div>
			</div>

			<div>
				<Heading title="Similar" />
				<Gallery items={similarMovies} variant="vertical" />
			</div>

			<DynamicRateMovie movieID={movie._id} slug={movie.slug} />
		</>
	)
}

export default Movie
