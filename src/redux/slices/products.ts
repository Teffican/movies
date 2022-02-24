import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../types/product.type"

const api_key = process.env.REACT_APP_API_KEY
const url = 'https://api.themoviedb.org'

type InitialStateType = {
    initialList: ProductType[],
    filteredList: ProductType[],
    isLoading: boolean
} 

const initialState: InitialStateType = {
    initialList: [],
    filteredList: [],
    isLoading: false
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return fetch(`${url}/4/list/8192763?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => data.results)
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.initialList = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const {  } = productsSlice.actions

export default productsSlice.reducer