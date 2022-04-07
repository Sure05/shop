import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPhoneById, fetchPhones, loadMorePhones} from "../api";

export const fetchProducts = createAsyncThunk(
	'phones/fetchPhones',
	async (categoryId) => {
		return await fetchPhones(categoryId)
	}
)
export const fetchMoreProducts = createAsyncThunk(
	'phones/fetchMorePhones',
	async () => {
		return await loadMorePhones()
	}
)
export const fetchProductById = createAsyncThunk(
	'phones/fetchProductById',
	async (id) => {
		return await fetchPhoneById(id)
	}
)

export const productSlice = createSlice({
	name: 'phones',
	initialState: {
		data: {},
		list: [],
		search: ''
	},
	reducers: {
		searchPhone: (state, action) => {
			state.search = action.payload
		},
		clearFilter: (state) => {
			state.search = ''
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.list = action.payload
		})
		builder.addCase(fetchMoreProducts.fulfilled, (state, action) => {
			state.list = [].concat(state.list, action.payload)
		})
		builder.addCase(fetchProductById.fulfilled, (state, action) => {
			state.data = action.payload
		})
	}
})

export const {searchPhone, clearFilter} = productSlice.actions

export default productSlice.reducer
