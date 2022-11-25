import { GetStaticProps, NextPage } from 'next'
import { IMovie } from '@shared/movies.types'
import Catalog from '@ui/catalog/Catalog'
import { MovieService } from '@services/movies.service'
import { GenreService } from '@services/genres.service'
import { ICollectionItem } from '@ui/collections/collections.interface'
import Collections from '@ui/collections/Collections'
import { any } from 'prop-types'

const GenresPage: NextPage<{ collections: ICollectionItem[] }> = ({
	collections,
}) => {
	return (
		<Collections
			title="Discovery"
			items={collections || []}
			description="discovery"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		return {
			props: {
				collections,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				collections: [],
			},
		}
	}
}

export default GenresPage
