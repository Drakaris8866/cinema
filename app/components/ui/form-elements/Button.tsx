import { FC } from 'react'
import { IButton } from '@ui/form-elements/form.interface'

import styles from './form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={`${styles.button} ${className}`} {...rest}>
			{children}
		</button>
	)
}

export default Button
