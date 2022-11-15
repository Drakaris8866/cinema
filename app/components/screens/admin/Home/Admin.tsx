import Statistics from '@screens/admin/Home/Statistics/Statistics'
import { FC } from 'react'
import AdminNavigation from '@ui/admin-navigation/AdminNavigation'
import Heading from '@ui/heading/Heading'
import Meta from '@utils/Meta/Meta'

const Admin: FC = () => {
	return (
		<Meta title="Admin home">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	)
}

export default Admin
