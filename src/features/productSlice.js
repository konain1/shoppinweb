
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState ={
    items:[],
    status:null
}

export const productFetch = createAsyncThunk("products/productFetch", async ()=>{
    console.log("getin")
    const response = await axios.get('http://localhost:5001/product')
    return response?.data
})


const productSlice = createSlice({

    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [productFetch.pending] : (state,action)=>{
            state.status = "pending"
        },
        [productFetch.fulfilled] : (state,action)=>{
            state.status = "success"
            state.items = action.payload
        },
        [productFetch.rejected] : (state,action)=>{
            state.status = "rejected"
        }
    }
})

export default  productSlice.reducer