import {createSlice} from '@reduxjs/toolkit'
const initialState={
  item:[]
}
 const CartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{
    cartitem(state,action){
      const presentData=state.item.find((el)=>el.id===action.payload.id)
      if(presentData){
        presentData;
        [...state.item]
      }else{
        const product={...action.payload,qty:1}
           state.item.push(product)
      }
     
    },
    deleteItem(state,action){
    state.item=state.item.filter((prod)=>prod.id!==action.payload)
      
    },
    incItem(state,action){
      
      let data=state.item.find((el)=>el.id===action.payload.id)
      if(data){
        data.qty++
        [...state.item]
        
     }
   },
     decItem(state,action){
      
      let data=state.item.find((el)=>el.id===action.payload.id)
      if(data){
        data.qty--
        [...state.item]
     }
   },
    // calculateTotal(state,action){
    //   const totalPrice=state.item.reduce((sum,el)=>{
    //    return sum+el.qty*el.price
    //  },0)
       // console.log(totalPrice) 
  //  }
  }
})
export const {cartitem,deleteItem,incItem,decItem,calculateTotal} = CartSlice.actions
export default CartSlice.reducer