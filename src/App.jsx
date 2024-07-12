import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/AuthContext/AuthProvider'
import HomePage from './Pages/ShopPages/HomePage'
import Navbar from './component/Navbar'
import Cart from './Pages/ShopPages/Cart'
import Checkout from './Pages/ShopPages/checkout/Checkout'
import SuccessfulPay from './Pages/ShopPages/checkout/SuccessfulPay'
import { BottomNav } from './component/BottomNav'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payment-successful' element={<SuccessfulPay />} />
          </Route>
        </Routes>
        <BottomNav />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App