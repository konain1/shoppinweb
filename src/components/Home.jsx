
import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

  const selected = useSelector((state)=> state.products.items)

  console.log(selected)
  return (

    <>
  <div style={{display:'flex'}}>

  
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

  </div>
    </>
   
  )
}

export default Home
