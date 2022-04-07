import React from 'react';
import {Card, CardContent, CardHeader, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {searchPhone} from "../redux/productSlice";

function FilterCatalog(props) {
	const dispatch = useDispatch();
	const searchByName = (e) => {
		dispatch(searchPhone(e.target.value))
	}
	
	return (
		<Card {...props}>
			<CardHeader title={"Filter"}/>
			<CardContent>
				<TextField onChange={searchByName} fullWidth label="Search" variant="outlined" />
			</CardContent>
		</Card>
	);
}

export default FilterCatalog;
