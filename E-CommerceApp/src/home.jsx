import {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { cartitem } from './app/slice';
import axios from 'axios';
import './home.css'
let api='https://dummyjson.com/products';

function Home(){
  // const selector=useSelector((state)=>state.cart)
  const [filterData,setFilterData]=useState([])
  const dispatch=useDispatch()
  const[data,setData]=useState([])
  
  async function getData(){
   let res= await axios.get(api)
    console.log(res.data.products)
    setData(res.data.products)
    setFilterData(res.data.products)
  }
  useEffect(()=>{
    getData()
  },[])
  function addToCart(el){
   dispatch(cartitem(el))
  
    // alert("add to Cart successfully")
  }

  function handleFilter(e){
    // console.log(val)
   let filterD=data.filter((el)=>el.brand.toLowerCase().includes(e.target.value))
    // console.log(filterD)
     setFilterData(filterD)
  
  }
  
  return(
    <div>
      <div>
      <input className='search_btn' type="text" placeholder="Search here"  onChange= 
    {handleFilter} />
     
      </div>
      {/* <div>
        {filterData.map((el)=>
       <div key={el.id}>
        <div>{el.rating}</div>
       </div>
                       )}
      </div> */}
      <div className='parent' >
        {filterData.map((el)=>
        <div key={el.id} >
          <div>
          <img src={el.images[0]}/>
          </div>
          <div style={{width:"70px"}}><h2 className='brand'>Brand:{el.brand}</h2></div>
       <div>
       <h2> rating: {el.rating}</h2>
       </div>
        <div>
         <h3 className='discount' > Discount:{el.discountPercentage}%</h3>
        </div>
          <div>
          <h3> Price:{el.price}</h3>
          </div>
          <button onClick={()=>addToCart(el)} className='cartadd_btn'>Add to cart</button>
          
        </div>
             )}
      </div>
      
    </div>
  )
}
export default Home