import Home from '@screens/home/Home'
import { GetStaticProps, NextPage } from 'next'
import { MovieService } from '@services/movies.service'
import { ISlide } from '@ui/slider/slider.inderface'
import { getActorUrl, getMovieUrl } from '@config/url.config'
import { getGenresList } from '@utils/movie/getGenreList'
import { IHome } from '@screens/home/home.interface'
import { IGalleryItem } from '@ui/gallery/gallery.interface'
import { ActorsService } from '@services/actors.service'

const Main: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Home slides={slides} trendingMovies={trendingMovies} actors={actors} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll('')
		const { data: dataActors } = await ActorsService.getActors('')
		const dataTrendingMovies = await MovieService.getMostPopularMovie()
		const slides: ISlide[] = movies.slice(0, 3).map((movie) => ({
			_id: movie._id,
			link: getMovieUrl(movie.slug),
			subTitle: getGenresList(movie.genres),
			title: movie.title,
			bigPoster: movie.bigPoster,
			videoUrl: movie.videoUrl
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies.map((movie) => ({
			name: movie.title,
			posterPath: movie.poster,
			url: getMovieUrl(movie.slug),
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		return {
			props: {
				slides,
				trendingMovies,
				actors,
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				trendingMovies: [],
				actors: [],
			},
		}
	}
}

export default Main
