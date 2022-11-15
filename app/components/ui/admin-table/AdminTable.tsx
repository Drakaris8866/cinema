import React, { FC } from 'react'
import TableHeading from '@ui/admin-table/TableHeading'
import { IAdminTable } from '@ui/admin-table/admin-table.interface'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import TableItem from '@ui/admin-table/TableItem'
import styles from './AdminTable.module.scss'

const AdminTable:FC<IAdminTable> = ({headerItems, isLoading, tableItems, removeHandler}) => {
	return (
		<div>
				<TableHeading headerItems={headerItems}/>
			{
				isLoading ? <SkeletonLoader count={1} className="mt-4" height={48}/> :	(
					tableItems.length ? tableItems.map((item) => <TableItem key={item._id} item={item} removeHandler={removeHandler}/>) : <div className={styles.notFound}>Not found</div>
				)
			}
		</div>
	)
}

export default AdminTable