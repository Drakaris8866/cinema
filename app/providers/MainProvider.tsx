import { QueryClient, QueryClientProvider } from 'react-query'
import { FC, ReactNode } from 'react'
import Layout from '@components/layout/Layout'
import { Provider } from 'react-redux'
import { store } from '@store/store'
import ToastrProvide from './ToastrProvider'
import HeadProvider from './HeadProvider/HeadProvide'
import AuthProvider from './AuthProvider/AuthProvider'
import { TypeComponentAuthFields } from '@shared/auth.types'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProviders: FC<TypeComponentAuthFields> = ({ children, Component }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ToastrProvide />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProviders
