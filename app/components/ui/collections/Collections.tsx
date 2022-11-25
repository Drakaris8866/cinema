import { FC } from 'react'
import { ICollections } from '@ui/collections/collections.interface'
import Heading from '@ui/heading/Heading'
import Meta from '@utils/Meta/Meta'
import Description from '@ui/heading/Description'
import CollectionItem from '@ui/collections/CollectionItem'
import styles from './Collections.module.scss'

const Collections: FC<ICollections> = ({items, title, description}) => {
	return (
		<Meta title={title}>
			<Heading title={title}/>
			<Description text={description}/>
			<div className={styles.items}>
			{items && items.map((item) => <CollectionItem key={item.slug} collection={item}/>)}
			</div>
		</Meta>
	)
}

export default Collections