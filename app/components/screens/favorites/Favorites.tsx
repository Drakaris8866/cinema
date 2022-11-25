import { FC } from 'react'
import { useFavorites } from '@screens/favorites/useFavorites'
import FavoriteBtn from '@ui/favorite/FavoriteBtn'
import CollectionItem from '@ui/collections/CollectionItem'
import Heading from '@ui/heading/Heading'
import Description from '@ui/heading/Description'
import styles from './Favorites.module.scss'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import Meta from '@utils/Meta/Meta'

const Favorites: FC = () => {
	const { movies, refetch, isLoading } = useFavorites()
	return (
		<Meta title="Favorites">
			<div className={styles.root}>
				{isLoading ? (
					<SkeletonLoader count={1} height={400} width={'100%'} />
				) : (
					<>
						<Heading title="Favorites" />
						<Description text="Favorites" />
						<div className={styles.items}>
							{movies &&
								movies.map((movie) => (
									<div key={movie._id} className={styles.item}>
										<p>{movie.title}</p>
										<FavoriteBtn movieID={movie._id} />
										<CollectionItem collection={movie} />
									</div>
								))}
						</div>
					</>
				)}
			</div>
		</Meta>
	)
}

export default Favorites
