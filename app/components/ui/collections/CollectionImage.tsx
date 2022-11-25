import Image from 'next/image'
import { FC } from 'react'
import { ICollectionItem } from '@ui/collections/collections.interface'

const CollectionImage: FC<{ collection: ICollectionItem }> = ({
	collection: { image, title },
}) => {
	return <Image alt={title} src={image} fill draggable={false} />
}

export default CollectionImage
