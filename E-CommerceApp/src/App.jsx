import './App.css'
import Home from'./home.jsx';
import Cart from './cart.jsx';
import Navbar from './navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default function App() {
  return (
 <div>
  <BrowserRouter>
   <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='cart' element={<Cart/>} />   
  </Routes>
  </BrowserRouter>
 </div>
  )
}
