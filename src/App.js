import {Route, Routes} from 'react-router-dom'
import './App.css';
import CatalogPage from "./app/pages/catalogPage";
import {Container} from "@mui/material";
import ProductPage from "./app/pages/productPage";
import CheckoutPage from "./app/pages/checkoutPage";
import SnackBarList from "./app/components/snackBar/snackBarList";

function App() {
	return (
		<Container style={{padding: "25px 0"}}>
			<Routes>
				<Route path={"/"} element={<CatalogPage />} />
				<Route path={"/category/:categoryId"} element={<CatalogPage />} />
				<Route path={"/product/:productId"} element={<ProductPage />} />
				<Route path={"/checkout"} element={<CheckoutPage />} />
			</Routes>
			<SnackBarList />
		</Container>
	);
}

export default App;
