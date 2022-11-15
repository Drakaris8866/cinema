import { FC } from 'react'
import { IGalleryItem } from '@ui/gallery/gallery.interface'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Gallery.module.scss'

const GalleryItem: FC<{ item: IGalleryItem; variant: string }> = ({
	item,
	variant = 'vertical',
}) => {
	return <Link href={item.url} className={`${styles.item} ${variant === "horizontal" ? `${styles.horizontal}` : `${styles.vertical}`}`}>
			<Image
				alt={item.name}
				src={item.posterPath}
				fill
				draggable={false}
				priority
			/>
			{item.content && (
				<div className={styles.content}>
					<div className={styles.title}>{item.content.title}</div>
					{item.content.subTitle && (
						<div className={styles.subTitle}> {item.content.subTitle}</div>
					)}
				</div>
			)}
	</Link>
}

export default GalleryItem
