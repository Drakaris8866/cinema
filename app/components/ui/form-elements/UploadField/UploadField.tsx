import SkeletonLoader from '@components/layout/Navigation/MenuContainer/GenreMenu/Loader'
import { useUploadField } from '@ui/form-elements/UploadField/useUploadField'
import { IUploadField } from '@ui/form-elements/form.interface'
import Image from 'next/image'
import React, { FC } from 'react'

import styles from './../form.module.scss'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	folder,
	onChange,
	image,
	style,
	isNoImage = false,
	className,
}) => {
	const { uploadImage, isLoading } = useUploadField(onChange, folder)

	return (
		<div
			className={`${styles.field} ${styles.uploadField} `}

		>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadImage} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadImageContainer} style={style}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							image && (
								<Image
									src={image}
									alt=""
									width={500}
									height={200}
									unoptimized
								/>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
