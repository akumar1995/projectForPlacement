import {useSelector,useDispatch} from 'react-redux'
// import { useState } from 'react'
import {deleteItem} from './app/slice'

import {incItem,decItem,calculateTotal} from './app/slice'
import './cart.css'
function Cart(){
  // const [count,setCount]=useState(1)
  const cItem=useSelector((state)=>state.cart)
  
  const {item,qty}=cItem
  const dispatch=useDispatch()
  
  function handleDelete(id){
    dispatch(deleteItem(id))
  }
  function handleInc(el){
   
  dispatch(incItem(el))
  }

   function handleDec(el){
     if(el.qty>1){
        dispatch(decItem(el))
     }
  }

   const totalPrice=item.reduce((sum,el)=>{
       return (sum+el.qty*el.price)
     },0)
       // console.log(totalPrice) 
  
   const handlePlaceOrder=()=>{
       alert("Your order is successfully")
     }
  return(
    
     <div>
       <h1 style={{textAlign:'center'}} >Cart page</h1>
      <div className='parent' >
        {item.map((el)=>
        <div key={el.id} >
          <div>
          <img src={el.images[0]}/>
          </div>
       <div>
       <h2> rating: {el.rating}</h2>
       </div>
        <div>
         <h3 className='discount' > Discount:{el.discountPercentage}%</h3>
        </div>
           <div>
          <h3> Price:{Number(el.price*el.qty)}</h3>
          </div>
          <div>
          <button onClick={()=>handleDec(el)} >-</button><span>{el.qty}</span><button onClick={()=>handleInc(el)} >+</button>
          </div>
        
          <button className='delete_btn' onClick={()=>handleDelete(el.id)} >Delete</button>
        
        </div>
                  
             )}
       
      </div>
      { console.log(Number(totalPrice))}
      <div className='payment_div' >
      <h1 className='payment_head' >Payment details</h1><hr/>
       <h2 className='amount' >total amount:{totalPrice}</h2>
         <button  className='order_button' onClick={handlePlaceOrder} >Place order</button>
      </div>
    </div>
  )
}
export default Cart

// <button onClick={()=>handleInc(el)} >+</button>