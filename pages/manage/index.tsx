import { NextPageAuth } from '@shared/auth.types'
import Admin from '@screens/admin/Admin'

const AdminPage: NextPageAuth = () => {
	return <Admin/>
}
AdminPage.isOnlyAdmin = true

export default AdminPage
