import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ProductType } from "../../types/product.type"

const api_key = process.env.REACT_APP_API_KEY
const url = 'https://api.themoviedb.org'

type InitialStateType = {
    initialList: ProductType[],
    filteredList: ProductType[],
    selectedProduct: ProductType,
    isLoading: boolean,
    isDetailsLoading: boolean
} 

const initialState: InitialStateType = {
    initialList: [],
    filteredList: [],
    isLoading: false,
    isDetailsLoading: false,
    selectedProduct: {
        id: 0,
        name: 'name',
        title: 'title',
        poster_path: '/',
        vote_average: 0
    }
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return fetch(`${url}/4/list/8192763?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => data.results)
    }
)

export const fetchProductDetails = createAsyncThunk(
    'products/fetchProductDetails',
    async (data: {id: number, type: string | undefined}) => {
        const {type, id} = data
        return fetch(`${url}/3/${type}/${id}?api_key=${api_key}`)
                .then(res => res.json())
                .then(data => data)
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

        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.selectedProduct = action.payload
            state.isDetailsLoading = false
        })
        builder.addCase(fetchProductDetails.pending, (state) => {
            state.isDetailsLoading = true
        })
        builder.addCase(fetchProductDetails.rejected, (state) => {
            state.isDetailsLoading = false
        })
    }
})

export const {  } = productsSlice.actions

export default productsSlice.reducer