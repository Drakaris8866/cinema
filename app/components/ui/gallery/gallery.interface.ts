export interface IGalleryItem {
	posterPath: string
	name: string
	url: string
	content?: {
		title: string
		subTitle?: string
	}
}

export interface IGallery {
	items: IGalleryItem[],
	variant: "vertical" | "horizontal"
}