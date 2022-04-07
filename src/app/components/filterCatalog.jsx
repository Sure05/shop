import React from 'react';
import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import products, {searchPhone} from "../redux/productSlice";

function FilterCatalog(props) {
	const dispatch = useDispatch();
	const search = useSelector(state => state.products.search)
	const searchByName = (e) => {
		dispatch(searchPhone(e.target.value))
	}
	
	return (
		<Card {...props}>
			<CardHeader title={"Filter"}/>
			<CardContent>
				<TextField onChange={searchByName} value={search} fullWidth label="Search" variant="outlined" />
			</CardContent>
		</Card>
	);
}

export default FilterCatalog;
