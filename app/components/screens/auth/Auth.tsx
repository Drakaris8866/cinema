import { FC, useState } from 'react'
import { useRedirect } from '@screens/auth/useRedirect'
import { useAuth } from '@hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from '@screens/auth/auth.interface'
import Heading from '@ui/heading/Heading'
import Button from '@ui/form-elements/Button'
import Meta from '@utils/Meta/Meta'

import styles from './Auth.module.scss'
import AuthField from '@screens/auth/AuthField'
import { useActions } from '@hooks/useActions'

const Auth: FC = () => {
	useRedirect()

	const [type, setType] = useState<'login' | 'register'>('login')

	const { isLoading } = useAuth()

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			register(data)
		}
		reset()
	}

	return (
		<Meta title={'Auth'}>
			<section className={styles.wrapper}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Heading title={'Auth'} />
					<AuthField
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>
					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
