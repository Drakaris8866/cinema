import { NextPageAuth } from '@shared/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <div>
		Profile
	</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage

