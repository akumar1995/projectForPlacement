import {useNavigate} from 'react-router-dom'
import './navbar.css';

import {useSelector} from 'react-redux'
function Navbar(){
  const navItem=useSelector((state)=>state.cart)
  const {item}=navItem
  const navigate=useNavigate()
  return(
    <div className='cont' >
      <div>
      <h1 className='heading'>Sasta Flipcart</h1>
        {/* {console.log(item.length)} */}
      </div>
    
        <div>
         <button className='home_btn' onClick={()=>navigate('/')}>Home</button>
        </div>
        <div>
         <button className='cart_btn' onClick={()=>navigate('/cart')}>Cart{item.length>0?":("+(item.length)+")":""}</button>
        </div>
     
    </div>
  )
}
export default Navbar