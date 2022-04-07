import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	text: '',
	show: false
}

const snackBarSlice = createSlice({
	name: 'snackBar',
	initialState,
	reducers: {
		showSuccessSnackBar: (state, action) => {
			state.text = action.payload;
			state.show = true;
		},
		hideSnackBar: state => {
			state.show = false
			state.text = ''
		}
	}
})

export const {showSuccessSnackBar, hideSnackBar} = snackBarSlice.actions

export default snackBarSlice.reducer
