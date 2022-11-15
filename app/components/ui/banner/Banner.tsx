import { FC } from 'react'
import Image from 'next/image'
import styles from './Banner.module.scss'

const Banner: FC<{ image: string; Content?: FC | null }> = ({ image, Content }) => {
	return (
		<div className={styles.banner}>
			<Image
				alt=""
				src={image}
				draggable={false}
				fill
				className="image-like-bg object-top"
				unoptimized
				priority
			/>
			{Content && <Content/>}
		</div>
	)
}

export default Banner
