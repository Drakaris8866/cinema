export interface ITableItem{
	_id: string,
	editUrl: string,
	items: string[]
}

export interface IAdminTableItem{
	tableItem: ITableItem,
	removeHandler: (id:string) => void
}

export interface IAdminTable {
	tableItems: ITableItem[]
	headerItems: string[]
	isLoading: boolean
	removeHandler: (id: string) => void
}