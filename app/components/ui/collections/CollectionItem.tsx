import { FC } from 'react'
import { ICollectionItem } from '@ui/collections/collections.interface'
import Image from 'next/image'
import Link from 'next/link'
import { getGenreUrl } from '@config/url.config'
import styles from './Collections.module.scss'

const CollectionItem: FC<{ collection: ICollectionItem }> = ({
	collection: { image, title, slug },
}) => {
	return (
		<Link href={getGenreUrl(slug)} className={styles.item}>
			<Image className={styles.image} fill src={image} alt="Poster" />
			<p className={styles.text}>{title}</p>
		</Link>
	)
}

export default CollectionItem
