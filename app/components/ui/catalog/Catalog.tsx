import { FC } from 'react'
import { ICatalog } from '@ui/catalog/catalog.interface'
import styles from './Catalog.module.scss'
import GalleryItem from '@ui/gallery/GalleryItem'
import { getMovieUrl } from '@config/url.config'
import Heading from '@ui/heading/Heading'
import Meta from '@utils/Meta/Meta'
import Description from '@ui/heading/Description'

const Catalog: FC<ICatalog> = ({ items, title, description }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{items.map((item) => (
					<GalleryItem
						key={item._id}
						variant="horizontal"
						item={{
							name: item.title,
							posterPath: item.bigPoster,
							url: getMovieUrl(item.slug),
							content: {
								title: item.title,
							},
						}}
					/>
				))}
			</section>
		</Meta>
	)
}

export default Catalog
