import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {fetchCategoriesList} from "../../redux/categoriesSlice";

function MenuLayout(props) {
	const menuList = useSelector(state => state.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		if(menuList.length === 0) dispatch(fetchCategoriesList())
	}, [menuList, dispatch])
	
	return (
		<Box
			className={"MenuLayout"}
			sx={{
				typography: 'body1',
				'& > *': {
					ml: 1,
					color: '#000',
					textDecoration: 'none'
				},
			}}
		>
			{menuList.map(el => <Link key={`menuLink-${el.id}`} to={`/category/${el.id}`}>{el.name}</Link>)}
		</Box>
	);
}

export default MenuLayout;
