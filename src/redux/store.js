

import {configureStore} from '@reduxjs/toolkit'
import productReducer , {productFetch} from '../features/productSlice';

import { productsApi } from '../features/productApi';
import cartReducer from '../features/cartSlice'



const store = configureStore({

    reducer:{
        products:productReducer,
        cart:cartReducer,
        [productsApi.reducerPath] : productsApi.reducer,

    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(productsApi.middleware)
    }
})

store.dispatch(productFetch())

export default store;