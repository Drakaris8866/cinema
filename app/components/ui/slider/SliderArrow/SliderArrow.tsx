import { FC } from 'react'
import { MaterialIcon } from '@ui/icons/MaterialIcon'

import styles from './SliderArrow.module.scss'

interface ISlideArrow {
	variant: 'left' | 'right'
	clickHandler: () => void
}

const SliderArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
	const isLeft = variant === 'left'

	return (
		<button
			onClick={clickHandler}
			className={`${styles.arrow} ${
				isLeft ? `${styles.left}` : `${styles.right}`
			}`}
		>
			<MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
		</button>
	)
}

export default SliderArrow