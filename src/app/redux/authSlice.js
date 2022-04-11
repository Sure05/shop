import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	showModal: false,
	user: {}
}

const userSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		openModal: state => {
			state.showModal = true
		},
		closeModal: state => {
			state.showModal = false
		}
	}
})

export const {openModal, closeModal} = userSlice.actions;

export default userSlice.reducer
