import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useActorEdit } from '@screens/admin/Actors/Edit/useActorEdit'
import Heading from '@ui/heading/Heading'
import Button from '@ui/form-elements/Button'
import Field from '@ui/form-elements/Field'
import SlugField from '@ui/form-elements/SlugField/SlugField'
import UploadField from '@ui/form-elements/UploadField/UploadField'
import Meta from '@utils/Meta/Meta'
import generateSlug from '@utils/string/generateSlug'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import styles from '@ui/form-elements/form.module.scss'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm({ mode: 'onChange' })

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit actor">
			<Heading title="Edit actors" className="mb-8" />
			{isLoading ? (
				<SkeletonLoader count={3} />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit as any)}>
						<div className={styles.fields}>
							<Field
								placeholder="Name"
								{...register('name', {
									required: 'Name is required',
								})}
								error={errors.name}
							/>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
							/>
						</div>
						<Controller
							name="photo"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Photo"
									error={error}
									folder="actors"
									image={value}
									onChange={onChange}
								/>
							)}
							rules={{
								required: 'Photo is required!',
							}}
						/>

						<Button>Update</Button>
					</form>
				</>
			)}
		</Meta>
	)
}

export default ActorEdit
