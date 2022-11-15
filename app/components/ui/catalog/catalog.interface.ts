export interface ICatalog{
	title: string
	description?: string
	items: {
		_id: string
		bigPoster: string
		slug: string
		title: string
	}[]
}