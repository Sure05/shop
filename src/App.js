import {Route, Routes} from 'react-router-dom'
import './App.css';
import CatalogPage from "./app/pages/catalogPage";
import {Container} from "@mui/material";
import ProductPage from "./app/pages/productPage";
import CheckoutPage from "./app/pages/checkoutPage";
import SnackBarList from "./app/components/snackBar/snackBarList";
import Header from "./app/components/header/Header";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {createContext} from "react";

const firebaseConfig = {
	apiKey: "AIzaSyDWyjxBafwBvxR8dQd7_y85UV0g8OuD580",
	authDomain: "shop-d3b56.firebaseapp.com",
	projectId: "shop-d3b56",
	storageBucket: "shop-d3b56.appspot.com",
	messagingSenderId: "408783369110",
	appId: "1:408783369110:web:50a9e0a4bd32c003a8a3b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)

export const FirestoreContext = createContext(null)

function App() {
	
	return (
		<FirestoreContext.Provider value={{app, auth, firestore}}>
			<Header/>
			<Container>
				<Routes>
					<Route path={"/"} element={<CatalogPage />} />
					<Route path={"/category/:categoryId"} element={<CatalogPage />} />
					<Route path={"/product/:productId"} element={<ProductPage />} />
					<Route path={"/checkout"} element={<CheckoutPage />} />
				</Routes>
				<SnackBarList />
			</Container>
		</FirestoreContext.Provider>
	);
}

export default App;
