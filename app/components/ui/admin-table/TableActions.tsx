import React, { FC } from 'react'
import { MaterialIcon } from '@ui/icons/MaterialIcon'
import { useRouter } from 'next/router'
import styles	from './AdminTable.module.scss'

const TableActions: FC<{
	editUrl: string
	removeHandler: (id: string) => void
	id: string
}> = ({ removeHandler, editUrl, id }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={() => removeHandler(id)}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}

export default TableActions
