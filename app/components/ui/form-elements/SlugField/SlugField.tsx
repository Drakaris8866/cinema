import React, { FC } from 'react'
import Field from '@ui/form-elements/Field'
import { FieldError, UseFormRegister } from 'react-hook-form'


interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField:FC<ISlugField> = ({register, generate, error}) => {
	return (
		<div className="relative">
			<Field {...register("slug", {
				required: "Slug is required"
			})} placeholder="Slug" error={error}/>
			<div onClick={generate} className="absolute top-0 right-0 bg-gray-700 px-2 py-1 rounded-2xl hover:cursor-pointer">
				Generate
			</div>
		</div>
	)
}

export default SlugField