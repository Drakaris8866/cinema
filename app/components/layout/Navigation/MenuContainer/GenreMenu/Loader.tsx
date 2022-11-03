import React, { FC } from 'react'
import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => (
	<Skeleton
		{...rest}
		baseColor="#1F2125"
		highlightColor="#292F2E"
		className={`rounded-lg ${className}`}
	/>
)

export default SkeletonLoader
