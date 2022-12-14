import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { IActor, IMovie } from '@shared/movies.types'
import { MovieService } from '@services/movies.service'
import Catalog from '@ui/catalog/Catalog'
import Error404 from '../404'
import { ActorsService } from '@services/actors.service'

interface IActorPage {
	actor: IActor
	movies: IMovie[] | undefined
}

const ActorPage: NextPage<IActorPage> = ({ actor, movies }) => {
	return actor ? <Catalog title={actor.name} items={movies || []} /> : <Error404 />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: actors } = await ActorsService.getActors()
		const paths = actors.map((a) => ({
			params: { slug: a.slug },
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
		const { data: actor } = await ActorsService.getBySlug(String(params?.slug))

		const { data: movies } = await MovieService.getByActor(actor._id)

		return {
			props: { movies, actor },
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

export default ActorPage
