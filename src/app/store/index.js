import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import products from "../redux/productSlice";
import card from "../redux/cardSlice";
import categories from "../redux/categoriesSlice";
import snackbar from "../redux/snackBarSlice";
import auth from "../redux/authSlice";
import {setToLocalStorage} from "../middleware/localStorage";
import {snackBarMiddleware} from "../middleware/snackBar";
import {fetchingCategory} from "../middleware/fetchCategory";

const rootReducer = {
	products,
	card,
	categories,
	snackbar,
	auth
}

export default function configureAppStore(preloadedState) {
	// if (process.env.NODE_ENV !== 'production' && module.hot) {
	// 	module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
	// }
	
	return configureStore({
		reducer: rootReducer,
		middleware: [fetchingCategory, snackBarMiddleware, setToLocalStorage, ...getDefaultMiddleware()],
		preloadedState,
	})
}
