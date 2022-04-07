import React from 'react';
import {Alert, Slide, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hideSnackBar} from "../../redux/snackBarSlice";

function TransitionLeft(props) {
	return <Slide {...props} direction="left" />;
}

function SnackBar({id, type, text}) {
	const dispatch = useDispatch()
	const handleClose = () =>dispatch(hideSnackBar(id))
	return (
		<Snackbar
			open
			aria-multiline
			key={id}
			autoHideDuration={6000}
			onClose={handleClose}
			TransitionComponent={TransitionLeft}
			anchorOrigin={{ vertical: 'bottom', horizontal: "right" }}
		>
			<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
				{text}
			</Alert>
		</Snackbar>
	);
}

export default SnackBar;
