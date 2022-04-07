import {createSlice} from "@reduxjs/toolkit";

const initialState = []

const snackBarSlice = createSlice({
	name: 'snackBar',
	initialState,
	reducers: {
		showSuccessSnackBar: (state, action) => {
			state.push(action.payload)
		},
		hideSnackBar: (state, action) => {
			return state.filter(el => el.id !== action.payload)
		}
	}
})

export const {showSuccessSnackBar, hideSnackBar} = snackBarSlice.actions

export default snackBarSlice.reducer
