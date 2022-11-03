import { FC } from 'react'

const Heading: FC<{ title: string }> = ({ title }) => {
	return <div className="text-2lg">{title}</div>
}

export default Heading
