import { TypeMaterialIconName } from '@shared/icon.types'

export interface IMenuItem {
	title: string
	link: string
	icon: TypeMaterialIconName
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
