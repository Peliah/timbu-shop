import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/AuthContext/AuthProvider'
import HomePage from './Pages/ShopPages/HomePage'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}>
            {/* <Route path/> */}
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App