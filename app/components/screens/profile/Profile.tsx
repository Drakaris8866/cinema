import { FC } from 'react'
import { useProfile } from '@screens/profile/useProfile'
import { useForm } from 'react-hook-form'
import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import Heading from '@ui/heading/Heading'
import Meta from '@utils/Meta/Meta'
import AuthField from '@screens/auth/AuthField'
import Button from '@ui/form-elements/Button'
import styles from './Profile.module.scss'

const Profile: FC = () => {
	const { handleSubmit, register, setValue, formState } = useForm()

	const { isLoading, onSubmit } = useProfile(setValue)

	return (
		<Meta title="Profile">
			<Heading title="Profile" />
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthField
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile