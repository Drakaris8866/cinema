import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'
import { TypeMaterialIconName } from '@shared/icon.types'

const MenuIcon: FC<{ icon: TypeMaterialIconName }> = ({ icon }) => {
	const MaterialIcon = MaterialIcons[icon]

	return <MaterialIcon />
}

export default MenuIcon
