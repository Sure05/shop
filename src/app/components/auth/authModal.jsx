import React, {useContext} from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Stack,
	TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../redux/authSlice";
import {useFormik} from 'formik';
import * as yup from 'yup'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {addDoc, collection} from 'firebase/firestore'
import {FirestoreContext} from "../../../App";

const validateLoginForm = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(4).required(),
})

function AuthModal(props) {
	const {auth, firestore} = useContext(FirestoreContext);
	const {showModal} = useSelector(state => state.auth);
	const dispatch = useDispatch()
	const handleClose = () => {
		formik.resetForm();
		dispatch(closeModal())
	}
	
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: validateLoginForm,
		onSubmit: (values) => {
			createUserWithEmailAndPassword(auth, values.email, values.password)
				.then(async (userCredential) => {
					const user = userCredential.user;
					await addDoc(collection(firestore, "usersList"), {
						id: user.uid,
						email: user.email,
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
			
		}
	})
	
	return (
		<Dialog
			fullWidth
			maxWidth={"xs"}
			open={showModal}
			onClose={handleClose}
		>
			<form onSubmit={formik.handleSubmit}>
				<DialogTitle sx={{textAlign: "center"}}>Register Form</DialogTitle>
				<DialogContent>
					<Stack
						sx={{
							marginTop: 1,
						}}
						spacing={2}
					>
						<TextField
							fullWidth
							name={"email"}
							label="Email"
							variant="outlined"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
						<TextField
							fullWidth
							type={"password"}
							name={"password"}
							label="Password"
							variant="outlined"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</Stack>
					<DialogContentText sx={{pt: 2}}>
						Or register?
					</DialogContentText>
				</DialogContent>
				<DialogActions sx={{justifyContent: "center", pb: 3}}>
					<Button variant={"outlined"} onClick={handleClose}>Cancel</Button>
					<Button variant={"outlined"} type={"submit"}>Submit</Button>
				</DialogActions>
			</form>
		</Dialog>
	);
}

export default AuthModal;
