import ShowProduct from "./comonents/product/ShowProduct"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductDetail from "./comonents/product/ProductDetail"
import Navbar from "./comonents/Navbar"
import SearchProduct from "./comonents/product/SearchProduct"
import Register from "./comonents/user/Register"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./comonents/user/Login"
import Profie from "./comonents/user/Profie"
import Cart from "./comonents/cart"
import Address from "./comonents/Address"
import Checkout from "./comonents/Checkout"
import OrderConfirmation from "./comonents/OrderConfirmation"
function App() {
  
  return (
   <Router>
          <Navbar/>
          <ToastContainer />
    <Routes>

    <Route path="/" element={<ShowProduct />} />
    <Route path="/product/search/:term" element={<SearchProduct />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profie/>}/>

    <Route path="/cart" element={<Cart />} />
    <Route path="/shipping" element={<Address />} />
    <Route path="/checkout" element={<Checkout/>} />
    <Route path="/oderconfirmation" element={<OrderConfirmation />} />
        </Routes>
        </Router>
  
  )
}

export default App
