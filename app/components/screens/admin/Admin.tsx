import Statistics from '@screens/admin/Statistics/Statistics'
import { FC } from 'react'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import Heading from '@ui/Heading'

const Admin: FC = () => {
	return (
		<div>
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</div>
	)
}

export default Admin
