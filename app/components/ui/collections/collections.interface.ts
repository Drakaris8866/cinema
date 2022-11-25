export interface ICollections {
	title: string,
	description: string
	items: ICollectionItem[]
}

export interface ICollectionItem{
	_id: string,
	title: string,
	slug: string,
	image: string,
}