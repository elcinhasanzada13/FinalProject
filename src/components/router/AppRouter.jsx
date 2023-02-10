import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Cart from '../pages/common/Cart'
import Footer from '../pages/common/Footer'
import Login from '../pages/common/Login'
import Navbar from '../pages/common/Navbar'
import ProductsDetails from '../pages/common/ProductsDetails'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Products from '../pages/Products'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/blog' element={<Blog />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/products/:id' element={<ProductsDetails />}></Route>
                </Routes>
                <Footer />
            </CartProvider>
        </BrowserRouter>
    )
}

export default AppRouter