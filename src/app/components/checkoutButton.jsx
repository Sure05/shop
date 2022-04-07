import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";

function CheckoutButton(props) {
	const {total, totalPrice} = useSelector(state => state.card);
	return (
		<Button component={Link} to={'/checkout'} fullWidth variant={"contained"}>
			Total: {total} {total > 0 ? `- $${totalPrice}` : ''}
		</Button>
	);
}

export default CheckoutButton;
