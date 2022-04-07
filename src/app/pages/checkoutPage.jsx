import React from 'react';
import {
	Button,
	Card,
	CardContent,
	Grid, Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer, TableFooter,
	TableHead,
	TableRow
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {dropProductFromCard} from "../redux/cardSlice";


function CheckoutPage(props) {
	const {list, totalPrice} = useSelector(state => state.card);
	const dispatch = useDispatch()
	
	const dropPhoneById = (id) => {
		dispatch(dropProductFromCard(id))
	}
	
	return (
		<Card>
			<CardContent>
				<Grid container spacing={2}>
					<Grid item sm={9}>
						{list.length > 0 ? (
							<TableContainer component={Paper}>
								<Table sx={{minWidth: 650}} aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell>Photo</TableCell>
											<TableCell>Name</TableCell>
											<TableCell>Price</TableCell>
											<TableCell>Count</TableCell>
											<TableCell/>
										</TableRow>
									</TableHead>
									<TableBody>
										{list.map((row) => (
											<TableRow
												key={row.name}
												sx={{'&:last-child td, &:last-child th': {border: 0}}}
											>
												<TableCell size={"small"} component="th" scope="row">
													<img style={{width:150, height: 150, objectFit: "contain"}} src={row.image} alt=""/>
												</TableCell>
												<TableCell>{row.name}</TableCell>
												<TableCell>{row.price}</TableCell>
												<TableCell>{row.count}</TableCell>
												<TableCell>
													<Button onClick={() => dropPhoneById(row.id)} variant={"outlined"}
													        color={"warning"}>
														Drop
													</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						) : 'Card is empty'}
						total: {totalPrice}
					</Grid>
					<Grid item sm={3}>
						<Button fullWidth component={Link} to={`/`} variant={"contained"} color={"primary"}>Back to
							store</Button>
						{list.length > 0 ? (
							<>
								<Button style={{marginTop: 5}} fullWidth variant={"contained"} color={"warning"}>Clear
									card</Button>
								<Button style={{marginTop: 5}} fullWidth variant={"contained"}
								        color={"secondary"}>Checkout</Button>
							</>
						) : ''}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default CheckoutPage;
