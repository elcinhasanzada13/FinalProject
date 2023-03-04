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
import Wishlist from '../pages/common/Wishlist'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Shop from '../pages/common/Shop'
import AppContextProvider from '../context/appContext'
import Checkout from '../pages/cart/Checkout'
import NotFoundPage from '../pages/common/NotFoundPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <AppContextProvider>
                <CartProvider>
                    <Navbar />
                    <Shop />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/blog' element={<Blog />}></Route>
                        <Route path='/products' element={<Products />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/products/:id' element={<ProductsDetails />}></Route>
                        <Route path='/wishlist' element={<Wishlist />}></Route>
                        <Route path='/checkout' element={<Checkout/>}></Route>
                        <Route path='*' element={<NotFoundPage/>}></Route>
                    </Routes>
                    <Footer />
                </CartProvider>
            </AppContextProvider>
        </BrowserRouter>
    )
}

export default AppRouter