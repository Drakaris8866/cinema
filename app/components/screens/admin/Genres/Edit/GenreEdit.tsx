import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useGenreEdit } from '@screens/admin/Genres/Edit/useGenreEdit'
import Heading from '@ui/heading/Heading'
import Button from '@ui/form-elements/Button'
import Field from '@ui/form-elements/Field'
import SlugField from '@ui/form-elements/SlugField/SlugField'
import Meta from '@utils/Meta/Meta'
import generateSlug from '@utils/string/generateSlug'
import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import styles from '@ui/form-elements/form.module.scss'

const DynamicTextEditor = dynamic(
	() => import('@ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm({ mode: 'onChange' })

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Meta title="MovieEdit genre">
			<Heading title="MovieEdit genres" className="mb-0.5" />
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
							></Field>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('name')))
								}
							/>
							<Field
								placeholder="Icon"
								{...register('icon', {
									required: 'Icon is required',
								})}
								error={errors.icon}
							></Field>
						</div>
						<Controller
							name="description"
							control={control}
							render={({ field: { onChange, value } }) => (
								<DynamicTextEditor
									placeholder="Description"
									onChange={onChange}
									value={value}
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required!',
								},
							}}
						/>

						<Button>Update</Button>
					</form>
				</>
			)}
		</Meta>
	)
}

export default GenreEdit
