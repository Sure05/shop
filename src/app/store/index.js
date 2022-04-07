import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
// import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import products from "../redux/productSlice";
import card from "../redux/cardSlice";
import categories from "../redux/categoriesSlice";
import snackbar from "../redux/snackBarSlice";
import {setToLocalStorage} from "../middleware/localStorage";
import {snackBarMiddleware} from "../middleware/snackBar";

const rootReducer = {
	products,
	card,
	categories,
	snackbar
}

export default function configureAppStore(preloadedState) {
	// if (process.env.NODE_ENV !== 'production' && module.hot) {
	// 	module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
	// }
	
	return configureStore({
		reducer: rootReducer,
		middleware: [snackBarMiddleware, setToLocalStorage, ...getDefaultMiddleware()],
		preloadedState,
	})
}
