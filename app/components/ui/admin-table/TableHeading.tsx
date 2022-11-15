import React, { FC } from 'react'
import styles from './AdminTable.module.scss'

const TableHeading: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={`${styles.item} ${styles.itemHeader}`}>
			{
				headerItems.map((value) => <div key={value} className={styles.heading}>{value}</div>)
			}
		</div>

	)
}

export default TableHeading