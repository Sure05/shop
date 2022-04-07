import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCategories} from "../api";

export const fetchCategoriesList = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		return await fetchCategories();
	}
)

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: [],
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCategoriesList.fulfilled, (state, action) => {
			state = action.payload;
			return state
		})
	}
})

export default categoriesSlice.reducer
