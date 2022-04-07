import React from 'react';
import {Alert, Slide, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hideSnackBar} from "../redux/snackBarSlice";

function TransitionLeft(props) {
	return <Slide {...props} direction="left" />;
}

function SnackBar(props) {
	const {show, text} = useSelector(state => state.snackbar);
	const dispatch = useDispatch()
	const handleClose = () =>dispatch(hideSnackBar())
	return (
		<Snackbar
			open={show}
			autoHideDuration={6000}
			onClose={handleClose}
			TransitionComponent={TransitionLeft}
			anchorOrigin={{ vertical: 'top', horizontal: "right" }}
		>
			<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
				{text}
			</Alert>
		</Snackbar>
	);
}

export default SnackBar;
