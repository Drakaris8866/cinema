import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useMovieEdit } from '@screens/admin/Movies/Edit/useMovieEdit'
import Heading from '@ui/heading/Heading'
import Button from '@ui/form-elements/Button'
import Field from '@ui/form-elements/Field'
import SlugField from '@ui/form-elements/SlugField/SlugField'
import UploadField from '@ui/form-elements/UploadField/UploadField'
import Meta from '@utils/Meta/Meta'
import generateSlug from '@utils/string/generateSlug'
import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

const DynamicSelect = dynamic(() => import('@ui/form-elements/Select/Select'))

import styles from '@ui/form-elements/form.module.scss'
import dynamic from 'next/dynamic'
import { useAdminGenres } from '@screens/admin/Movies/Edit/useAdminGenres'
import { useAdminActors } from '@screens/admin/Movies/Edit/useAdminActors'

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
		getValues,
		control,
	} = useForm({ mode: 'onChange' })

	const { isLoading, onSubmit } = useMovieEdit(setValue)
	const { data: genres, isLoading: isGenresLoading } = useAdminGenres()
	const { data: actors, isLoading: isActorsLoading } = useAdminActors()

	return (
		<Meta title="Edit movies">
			<Heading title="Edit movies" className="mb-8" />
			{isLoading ? (
				<SkeletonLoader count={3} />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit as any)}>
						<div className={styles.fields}>
							<Field
								placeholder="Title"
								{...register('title', {
									required: 'Title is required',
								})}
								error={errors.name}
							/>
							<SlugField
								register={register}
								generate={() =>
									setValue('slug', generateSlug(getValues('title')))
								}
							/>
							<Field
								style={{ width: '23%' }}
								placeholder="Description"
								{...register('description', {
									required: 'Description is required',
								})}
								error={errors.description}
							/>
							<Field
								style={{ width: '23%' }}
								placeholder="Country"
								{...register('parameters.country', {
									required: 'Country is required',
								})}
								error={errors.parameters}
							/>
							<Field
								style={{ width: '23%' }}
								placeholder="Duration(min.)"
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
								error={errors.parameters}
							/>
							<Field
								style={{ width: '23%' }}
								placeholder="Year"
								{...register('parameters.year', {
									required: 'Year is required',
								})}
								error={errors.parameters}
							/>
						</div>
						<div>
							<Controller
								name="genres"
								control={control}
								rules={{
									required: 'Please select at least one genre!',
								}}
								render={({ field }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										placeholder="Select genres"
									/>
								)}
							/>
							<Controller
								name="actors"
								control={control}
								rules={{
									required: 'Please select at least one actor!',
								}}
								render={({ field }) => (
									<DynamicSelect
										field={field}
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
										placeholder="Select actors"
									/>
								)}
							/>
						</div>
						<div className="flex justify-between gap-10">
							<Controller
								name="poster"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										placeholder="Poster"
										error={error}
										folder="movies"
										image={value}
										onChange={onChange}
									/>
								)}
								rules={{
									required: 'Poster is required!',
								}}
							/>

							<Controller
								name="bigPoster"
								control={control}
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										placeholder="BigPoster"
										error={error}
										folder="movies"
										image={value}
										onChange={onChange}
										className={styles.bigPoster}
										style={{ width: '400px', height: '100%' }}
									/>
								)}
								rules={{
									required: 'BigPoster is required!',
								}}
							/>
						</div>

						<Controller
							name="videoUrl"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadField
									placeholder="Video"
									error={error}
									folder="movies"
									video={value}
									onChange={onChange}
									isNoImage
								/>
							)}
							rules={{
								required: 'Video is required!',
							}}
						/>

						<Button className="mt-5">Update</Button>
					</form>
				</>
			)}
		</Meta>
	)
}

export default MovieEdit
