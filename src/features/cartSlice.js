
import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity:0,
    cartTotalAmount:0
}

const cartSlice = createSlice({
    name:'cartSlce',
    initialState,
    reducers:{
        addToCart(state,action){

            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)

            if(itemIndex >= 0 ){
                state.cartItems[itemIndex].cartQuantity += 1 
                toast.info(`increased ${state.cartItems[itemIndex].name}`, {
                    position:"bottom-left"
                })
            }else{      
                const tempProd = {...action.payload , cartQuantity : 1}
                state.cartItems.push(tempProd)
                toast.success(`Added ${action.payload.name} `, {
                    position:"bottom-left"
                })
            }

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        }
    }

})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer