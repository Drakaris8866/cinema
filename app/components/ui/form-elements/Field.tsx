import { FC, forwardRef } from 'react'
import { IField } from '@ui/form-elements/form.interface'
import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ type = 'text', placeholder, style, error, ...rest }, ref) => {
		return (
			<div className={`${styles.common} ${styles.field}`} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
