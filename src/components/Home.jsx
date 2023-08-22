
import React from 'react'
import { useSelector } from 'react-redux'
import {useGetAllProductsQuery} from './../features/productApi'
 
function Home() {

  const {data,error,isLoading} = useGetAllProductsQuery()
  console.log(data)
  const selected = useSelector((state)=> state.products.items )

  return (

    <>
  {/* <div style={{display:'flex'}}>

  
    {
      selected?.map((item,index)=>{
        return(
          <div style={{
            width:'300px' , height:'400px', border:'1px solid black' , margin:'20px 20px', display:'grid',placeItems:'center'
          }}>

          <div>{item.name}</div>
          <div style={{}}> <img src={item.image}  style={{width:'140px',}}/></div>
          <div>{item.price}</div>
            
          </div>
        )
      })
    }

  </div> */}




  {/* 2nd method to fetch data */}



    <div className='home-container'> 

    {isLoading ? <p>loading .......</p> :  error ? <p>error occured </p> :  <>

    <div className='products'> {data?.map((item,index)=>{

        return(
          <>

          <div className='product'> <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <div className='details'> <span>{item.desc}</span> <br></br>
          <span>Price : {item.price}</span>
          </div>
          <button> add to cart  </button>
           </div>
          </>
        )
    })}</div>

    </>}
    </div>
    </>
   
  )
}

export default Home
