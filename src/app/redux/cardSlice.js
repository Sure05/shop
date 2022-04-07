import {createSlice} from "@reduxjs/toolkit";

let initialState = {
	list: [],
	total: 0,
	totalPrice: 0
};
let cardState = localStorage.getItem('card');
if(cardState) {
	initialState = JSON.parse(cardState)
}

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addToCard: (state, action) => {
			const index = state.list.findIndex(el => el.id === action.payload.id);
			if(index >= 0) {
				state.list[index].count++
			} else {
				state.list.push({
					...action.payload,
					count: 1
				})
			}
			state.total++;
			state.totalPrice += action.payload.price;
		},
		dropProductFromCard: (state, action) => {
			let totalPrice = 0;
			let total = 0;
			let newCard = state.list.filter(el => {
				if(el.id !== action.payload){
					total += el.count;
					totalPrice += el.price * el.count;
					return el
				}
			})
			return {
				list: newCard,
				total,
				totalPrice
			}
		},
		clear: state => {
			return {
				list: [],
				total: 0,
				totalPrice: 0
			}
		}
	}
});

export const {addToCard, dropProductFromCard, clear} = cardSlice.actions

export default cardSlice.reducer;
