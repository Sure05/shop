import React from 'react';
import {Badge, IconButton} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AuthModal from "../auth/authModal";
import {openModal} from "../../redux/authSlice";

function UserLayout(props) {
	const {total} = useSelector(state => state.card)
	const dispatch = useDispatch();
	const openAuthModal = () => dispatch(openModal())
	
	return (
		<div className={"UserLayout"}>
			<IconButton onClick={openAuthModal} aria-label={"user"}>
				<AccountCircleIcon color={"action"} />
			</IconButton>
			<Link to={"/checkout"}>
				<IconButton aria-label="cart">
					<Badge badgeContent={total} color="primary">
						<ShoppingCartIcon color="action"/>
					</Badge>
				</IconButton>
			</Link>
			<AuthModal />
		</div>
	);
}

export default UserLayout;
