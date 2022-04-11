import {clearFilter} from "../redux/productSlice";

export const fetchingCategory = state => next => action => {
	if(action.type === 'phones/fetchPhones/pending'){
		state.dispatch(clearFilter())
	}
	return next(action)
}
