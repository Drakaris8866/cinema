import { FC, useEffect } from 'react'
import { TypeComponentAuthFields } from '@shared/auth.types'
import dynamic from 'next/dynamic'
import { useAuth } from '@hooks/useAuth'
import { useActions } from '@hooks/useActions'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser },
}) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) logout()
	}, [])

	return !isOnlyAdmin && !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
