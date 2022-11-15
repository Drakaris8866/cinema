import { FC } from 'react'

const Heading: FC<{ title: string, className?: string }> = ({ title, className }) => {
	return <div className={`text-2lg ${className}`}>{title}</div>
}

export default Heading
