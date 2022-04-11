import React, {useEffect} from 'react';
import {Button, Grid} from "@mui/material";
import CardTemplate from "../components/cardTemplate";
import {useDispatch, useSelector} from "react-redux";
import {clearFilter, fetchMoreProducts, fetchProducts} from "../redux/productSlice";
import CheckoutButton from "../components/checkoutButton";
import CategoryList from "../components/categoryList";
import {useParams} from "react-router-dom";
import FilterCatalog from "../components/filterCatalog";
import {getPhones} from "../selector";

function CatalogPage(props) {
	const dispatch = useDispatch();
	const {categoryId} = useParams()
	const {list: phones, search} = useSelector(state => state.products)
	useEffect(() => {
		dispatch(fetchProducts(categoryId ?? null))
	}, [categoryId, dispatch])
	
	const loadMore = () => dispatch(fetchMoreProducts(phones.length))
	const list = getPhones(phones, search);
	return (
		<>
			<Grid container spacing={2}>
				<Grid item sm={3} xs={12}>
					<CheckoutButton/>
					<FilterCatalog style={{marginTop: 15}}/>
					<CategoryList style={{marginTop: 15}}/>
				</Grid>
				<Grid item sm={9} xs={12}>
					<Grid container spacing={2}>
						{list.map((el, index) =>
							<Grid item key={`${el.id}-${index}`} sm={4} xs={12}>
								<CardTemplate data={el}/>
							</Grid>
						)}
					</Grid>
					{list.length > 0 ? <div style={{display: "flex", marginTop: 25, justifyContent: "flex-end"}}>
						<Button onClick={loadMore} variant={"contained"}>Load more</Button>
					</div> : ''}
				</Grid>
			</Grid>
		</>
	);
}

export default CatalogPage;
