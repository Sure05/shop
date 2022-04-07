import {hideSnackBar, showSuccessSnackBar} from "../redux/snackBarSlice";

export const snackBarMiddleware = store => next => action => {
	switch (action.type) {
		case 'card/addToCard':
			store.dispatch(showSuccessSnackBar('dada'))
			// setTimeout(() => {
			// 	store.dispatch(hideSnackBar())
			// }, 5000)
			break;
		default:
	}
	return next(action)
}
