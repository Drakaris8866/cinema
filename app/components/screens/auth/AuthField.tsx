import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import Field from '@ui/form-elements/Field'

interface IAuthField {
	formState: FormState<any>
	register: UseFormRegister<any>
	isPasswordRequired: boolean
}

const AuthField: FC<IAuthField> = ({
	formState: { errors },
	register,
	isPasswordRequired,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				type="email"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Please enter a valid password',
								},
						  }
						: {}
				)}
				placeholder="Password"
				error={errors.password}
				type="password"
			/>
		</>
	)
}

export default AuthField



