import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '@assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link className="p-layout block mb-2" href="/">
			<Image src={logo} width={247} height={34} alt="logo" />
		</Link>
	)
}

export default Logo
