import { NextPageAuth } from '@shared/auth.types'
import Profile from '@screens/profile/Profile'

const ProfilePage: NextPageAuth = () => {
	return <Profile/>
}

ProfilePage.isOnlyUser = true

export default ProfilePage

