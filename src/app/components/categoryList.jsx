import React, {useEffect} from 'react';
import {Card, CardHeader, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoriesList} from "../redux/categoriesSlice";
import {Link} from "react-router-dom";

function CategoryList(props) {
	const categories = useSelector(state => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesList())
	}, [dispatch])
	return (
		<Card {...props}>
			<CardHeader title={"Categories"}/>
			<List>
				<ListItem disablePadding>
					<ListItemButton component={Link} to={`/`}>
						<ListItemText primary="All"/>
					</ListItemButton>
				</ListItem>
				{categories.map(el => (
					<ListItem key={el.id} disablePadding>
						<ListItemButton component={Link} to={`/category/${el.id}`}>
							<ListItemText primary={el.name}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Card>
	);
}

export default CategoryList;
