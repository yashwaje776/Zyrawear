import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
        <ToastContainer></ToastContainer>
         <Navbar/>
         <SearchBar/>
         <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/collection' element={<Collection/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path="/placeOrder" element={<PlaceOrder/>} />
            <Route path ='/product/:productId' element={<Product/>} />
         </Routes>
         <Footer/>
    </div>
  )
}

export default App
