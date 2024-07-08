import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/AuthContext/AuthProvider'
import HomePage from './Pages/ShopPages/HomePage'
import Navbar from './component/Navbar'
import Cart from './Pages/ShopPages/Cart'
import { CartProvider } from './hooks/CartContext/CartProvider'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App