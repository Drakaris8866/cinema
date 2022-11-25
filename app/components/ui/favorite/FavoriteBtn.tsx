import { FC } from 'react'
import { useFavoriteBtn } from '@ui/favorite/useFavoriteBtn'
import styles from './FavoriteBtn.module.scss'

const FavoriteBtn: FC<{ movieID: string }> = ({ movieID }) => {
	const { favoriteMovie, mutateAsync } = useFavoriteBtn(movieID)

	return (
		<button
			onClick={() => mutateAsync()}
			className={`${styles.button} ${favoriteMovie && `${styles.animate}`}`}
			style={{ backgroundImage: `url('/heart-animation.png')` }}
		/>
	)
}

export default FavoriteBtn
