import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductById} from "../redux/productSlice";
import {
	Button,
	Card, CardActions,
	CardContent,
	CardHeader,
	Grid,
	List,
	ListItem,
	Typography
} from "@mui/material";
import CheckoutButton from "../components/checkoutButton";
import {addToCard} from "../redux/cardSlice";

function ProductPage(props) {
	const {productId} = useParams();
	const product = useSelector(state => state.products.data)
	const dispatch = useDispatch();
	useEffect(() => {
		if (productId)
			dispatch(fetchProductById(productId))
	}, [dispatch, productId])
	
	const add = () => {
		dispatch(addToCard(product))
	}
	
	return (
		<Grid container spacing={2}>
			<Grid item sm={9} xs={12} >
				<Card>
					<CardContent>
						<Grid container>
							<Grid item sm={6} xs={12}>
								<img src={product.image} alt={product.name}/>
							</Grid>
							<Grid item sm={6} xs={12}>
								<List dense={false}>
									<ListItem>CPU: {product.cpu}</ListItem>
									<ListItem>Camera: {product.camera}</ListItem>
									<ListItem>Size: {product.size}</ListItem>
									<ListItem>Weight: {product.weight}</ListItem>
									<ListItem>Display: {product.display}</ListItem>
									<ListItem>Battery: {product.battery}</ListItem>
									<ListItem>Memory: {product.memory}</ListItem>
								</List>
							</Grid>
							<Grid item>
								{product.name} - ${product.price}
								<div>
									{product.description}
								</div>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			</Grid>
			<Grid item sm={3} xs={12} >
				<Card>
					<CardHeader title={"Quick shop"} />
					<CardContent>
						<CheckoutButton />
						<Typography gutterBottom variant="h5">
							{product.name}
							<div>${product.price}</div>
						</Typography>
					</CardContent>
					<CardActions style={{flexDirection: "column"}}>
						<Button fullWidth onClick={add} style={{marginBottom: 5}} variant={"outlined"}>Buy now</Button>
						<Button fullWidth component={Link} to={`/`} variant={"outlined"} color={"inherit"}>Back to store</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	);
}

export default ProductPage;
