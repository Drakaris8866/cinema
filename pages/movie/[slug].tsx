import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IMovie } from '@shared/movies.types'
import { MovieService } from '@services/movies.service'
import Error404 from '../404'
import { IGalleryItem } from '@ui/gallery/gallery.interface'
import Movie from '@screens/movie/Movie'
import { getMovieUrl } from '@config/url.config'

interface IMoviePage {
	similarMovies: IGalleryItem[]
	movie: IMovie | undefined
}

const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
    return movie ? (
      <Movie movie={movie} similarMovies={similarMovies}/>
    ) : (
      <Error404 />
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: movies } = await MovieService.getAll()
        const paths = movies.map((m) => ({
            params: { slug: m.slug },
        }))
        return {
            paths,
            fallback: false,
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
        const { data: movie } = await MovieService.getBySlug(String(params?.slug))

        const responseSimilarMovies = await MovieService.getByGenres(movie.genres.map(g => g._id))

        const similarMovies: IGalleryItem[] = responseSimilarMovies.data
          .filter((m) => m._id !== movie._id)
          .map((m) => ({
              name: m.title,
              posterPath: m.poster,
              url: getMovieUrl(m.slug),
          }))

        return {
            props: { movie, similarMovies },
            revalidate: 60
        }
    } catch (e) {
        return {
            props: {
                notFound: true,
            },

        }
    }
}

export default MoviePage
