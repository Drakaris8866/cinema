import { FC } from 'react'
import { IGallery } from '@ui/gallery/gallery.interface'
import GalleryItem from '@ui/gallery/GalleryItem'

import styles from './Gallery.module.scss'

const Gallery: FC<IGallery> = ({ items, variant }) => {
	return (
		<div className={styles.gallery}>
			{items.map((item) => (
				<GalleryItem key={item.url} item={item} variant={variant} />
			))}
		</div>
	)
}

export default Gallery
