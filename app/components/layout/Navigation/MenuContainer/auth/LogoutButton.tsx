import { FC, MouseEvent } from 'react'
import { useActions } from '@hooks/useActions'
import { MdLogout } from 'react-icons/all'
import styles from './../Menu.module.scss'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className={styles.item}>
			<a className="flex gap-1 items-center" onClick={logoutHandler}>
				<MdLogout />
				<p>Logout</p>
			</a>
		</li>
	)
}

export default LogoutButton
