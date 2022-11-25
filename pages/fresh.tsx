import { GetStaticProps, NextPage } from 'next'
import { IMovie } from '@shared/movies.types'
import Catalog from '@ui/catalog/Catalog'
import { MovieService } from '@services/movies.service'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			title="Fresh movie"
			items={movies || []}
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll('')

		return {
			props: {
				movies,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			notFound: true,
		}
	}
}

export default FreshPage
