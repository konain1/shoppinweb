
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[],
    status:null
}


const productSlice = createSlice({

    name:"products",
    initialState,
    reducers:{}
})

export default  productSlice.reducer