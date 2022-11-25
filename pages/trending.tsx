import { GetStaticProps, NextPage } from 'next'
import { IMovie } from '@shared/movies.types'
import Catalog from '@ui/catalog/Catalog'
import { MovieService } from '@services/movies.service'

const trending: NextPage<{ popularMovies: IMovie[] }> = ({ popularMovies }) => {
	return (
		<Catalog
			title="Trending movies"
			items={popularMovies || []}
			description="Trending movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const popularMovies = await MovieService.getMostPopularMovie()

		return {
			props: {
				popularMovies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default trending