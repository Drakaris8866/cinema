import ReduxToastrLib from 'react-redux-toastr'
import { FC } from 'react'

const ToastrProvide: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			timeOut={4000}
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	)
}

export default ToastrProvide
