import { FC } from 'react'
import { useRateMovie } from '@screens/movie/RateMovie/useRateMovie'
import styles from './RateMovie.module.scss'
import { useAuth } from '@hooks/useAuth'
import AuthButton from '@ui/video-player/AuthPlaceholder/AuthButton'
import StarRatings from 'react-star-ratings';


const RateMovie: FC<{ movieID: string; slug: string }> = ({
	movieID,
	slug,
}) => {
	const { rating, isSended, handleClick } = useRateMovie(movieID)
	const { user } = useAuth()

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<div className={styles.rating}>
							<StarRatings rating={rating || 0} starRatedColor="gold" numberOfStars={5} name="rating-movie" changeRating={handleClick}/>
						</div>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
