import { FC } from 'react'
import { IOption, ISelect } from '@ui/form-elements/Select/slect.interface'
import ReactSelect, { OnChangeValue } from 'react-select'
import makeAnimated from 'react-select/animated'
import styles from './Select.module.scss'
import formStyles from "./../form.module.scss"

const animatedComponents = makeAnimated()

const Select: FC<ISelect> = ({
	placeholder,
	field,
	isLoading,
	isMulti,
	options,
	error,
}) => {
	const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map((option) => option.value)
				: (newValue as IOption).value
		)
	}

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter((option) => field.value.indexOf(option.value) >= 0)
				: options.find((option) => option.value === field.value)
		}
	}

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					classNamePrefix="custom-select"
					placeholder={''}
					options={options}
					value={getValue()}
					onChange={onChange}
					isMulti={isMulti}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={formStyles.error}>{error.message}</div>}
		</div>
	)
}

export default Select
