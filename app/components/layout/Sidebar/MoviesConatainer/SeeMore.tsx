import React, { FC } from 'react'
import Link from 'next/link'

const SeeMore: FC<{ link: string }> = ({ link }) => {
	return (
		<Link
			className="w-full block bg-primary text-center py-2 text-2lg text-white rounded-lg"
			href={link}
		>
			See more
		</Link>
	)
}

export default SeeMore
