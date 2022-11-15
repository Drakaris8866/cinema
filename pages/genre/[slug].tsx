import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IGenre, IMovie } from '@shared/movies.types'
import { GenreService } from '@services/genres.service'
import { MovieService } from '@services/movies.service'
import Catalog from '@ui/catalog/Catalog'
import Error404 from '../404'

interface IGenrePage {
	genre: IGenre
	movies: IMovie[]
}

const GenrePage: NextPage<IGenrePage> = ({ genre, movies }) => {
	return genre ? (
		<Catalog
			title={genre.name}
			description={genre.description}
			items={movies}
		/>
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: genres } = await GenreService.getAll()
		const paths = genres.map((g) => ({
			params: { slug: g.slug },
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: genre } = await GenreService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByGenres([genre._id])

		return {
			props: { movies, genre },
		}
	} catch (e) {
		return {
			props: {
				notFound: true,
			},

		}
	}
}

export default GenrePage
