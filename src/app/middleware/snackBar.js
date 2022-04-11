import {hideSnackBar, showSuccessSnackBar} from "../redux/snackBarSlice";

import { v4 as uuidv4 } from 'uuid';

export const snackBarMiddleware = store => next => action => {
	
	switch (action.type) {
		case 'card/clear':
			store.dispatch(showSuccessSnackBar({
				id: uuidv4(),
				text: 'Card clear',
				type: "info"
			}))
			break;
		case 'card/dropProductFromCard':
			store.dispatch(showSuccessSnackBar({
				id: uuidv4(),
				text: `Product ${action.payload.name} removed from card`,
				type: "warning"
			}))
			break;
		case 'card/addToCard':
			store.dispatch(showSuccessSnackBar({
				id: uuidv4(),
				text: `Success added ${action.payload.name} to card`,
				type: "success"
			}))
			break;
		default:
	}
	return next(action)
}
