import {createSlice} from "@reduxjs/toolkit";

let initialState = {
	list: [],
	total: 0,
	totalPrice: 0
};
let cardState = localStorage.getItem('card');
if (cardState) {
	initialState = JSON.parse(cardState)
}

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addToCard: (state, action) => {
			const index = state.list.findIndex(el => el.id === action.payload.id);
			if (index >= 0) {
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
			let newCard = [];
			let currentEl = state.list.find(el => el.id === action.payload.id);
			if (currentEl.count > 1) {
				state.totalPrice = 0;
				state.total = 0;
				state.list.map(el => {
					if (el.id === action.payload.id)
						el.count--;
					state.total += el.count;
					state.totalPrice += el.price * el.count;
					return el
				})
			} else {
				newCard = state.list.filter(el => {
					if (el.id !== action.payload.id) {
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
