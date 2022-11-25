import { GetStaticProps, NextPage } from 'next'
import { GenreService } from '@services/genres.service'
import { ICollectionItem } from '@ui/collections/collections.interface'
import Collections from '@ui/collections/Collections'

const GenresPage: NextPage<{ collections: ICollectionItem[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
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
