import { FC, useEffect, useState } from 'react'
import { useFavoriteBtn } from '@ui/favorite/useFavoriteBtn'
import styles from './FavoriteBtn.module.scss'
import Loader from '@ui/loader/Loader'



const FavoriteBtn: FC<{ movieID: string }> = ({ movieID }) => {
	const { favoriteMovie, mutateAsync, isLoading } = useFavoriteBtn(movieID)
	const [isLoadingBtn, setIsLoadingBtn] = useState(true)
	useEffect(() => {
		setIsLoadingBtn(isLoading)
	}, [isLoading])
	const handleClick = () => {
	  setIsLoadingBtn(true)
		mutateAsync()
	}
	return (
		<div>
			{isLoadingBtn ? (
				<div className={`${styles.button}`}>
					<Loader />
				</div>
			) : (
				<button
					onClick={() => handleClick()}
					className={`${styles.button} ${favoriteMovie && `${styles.animate}`}`}
					style={{ backgroundImage: `url('/heart-animation.png')` }}
				/>
			)}
		</div>
	)
}

export default FavoriteBtn
