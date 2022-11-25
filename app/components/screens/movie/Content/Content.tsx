import { FC } from 'react'
import { IMovie } from '@shared/movies.types'
import { getGenreUrl } from '@config/url.config'
import ContentList from '@screens/movie/Content/ContentList/ContentList'
import styles from './Content.module.scss'
import FavoriteBtn from '@ui/favorite/FavoriteBtn'
import { useAuth } from '@hooks/useAuth'

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { user } = useAuth()
	return (
		<div className={styles.content}>
			<h1>{movie.title}</h1>
			{user && <FavoriteBtn movieID={movie._id} />}
			<div className={styles.details}>
				{`${movie.parameters.year}-${movie.parameters.country}-${movie.parameters.duration} min.`}
			</div>
			<ContentList
				name="Genres"
				links={movie.genres.map((g) => ({
					link: getGenreUrl(g.slug),
					title: g.name,
					_id: g._id,
				}))}
			/>
			<ContentList
				name="Actors"
				links={movie.actors.map((a) => ({
					link: getGenreUrl(a.slug),
					title: a.name,
					_id: a._id,
				}))}
			/>
		</div>
	)
}

export default Content
