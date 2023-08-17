import React from 'react'
import { useGetAllProductsQuery } from '../features/productApi'


function Cart() {
const {data,error,isLoading}=useGetAllProductsQuery()
  return (
    <div>
      <h1>cart</h1>
    </div>
  )
}

export default Cart
