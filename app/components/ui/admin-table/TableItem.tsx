import React, { FC } from 'react'
import { ITableItem } from '@ui/admin-table/admin-table.interface'
import TableActions from '@ui/admin-table/TableActions'
import styles from './AdminTable.module.scss'

const TableItem: FC<{item : ITableItem, removeHandler: (id:string) => void}> = ({item, removeHandler}) => {
	return <div className={styles.item}>
		{item.items.map((value) => <div key={value}>{value}</div>)}
		<TableActions editUrl={item.editUrl} removeHandler={removeHandler} id={item._id}/>
	</div>
}

export default TableItem