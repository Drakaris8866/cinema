import { FC } from 'react'
import { useFavoriteBtn } from '@ui/favorite/useFavoriteBtn'
import HeartImage from './heart-animation.png'
import styles from './FavoriteBtn.module.scss'

const FavoriteBtn: FC<{ movieID: string }> = ({ movieID }) => {
	const { favoriteMovie, mutateAsync } = useFavoriteBtn(movieID)

	return (
		<button
			onClick={() => mutateAsync()}
			className={`${styles.button} ${favoriteMovie && `${styles.animate}`}`}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		/>
	)
}

export default FavoriteBtn