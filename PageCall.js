import React from 'react'
import Registerats from './Registerats'
import Loginats from './Loginats'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Atshome from './Atshome'
import ProtectedRoutes from './ProtectedRoutes'

function Pagecall() {
  return (
    <div>
      {/* <Registerats /> */}
      {/* <Loginats /> */}
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Loginats />} />
        <Route path='/' element={<ProtectedRoutes />} />
        <Route path='/home' element={<Atshome />} />
        <Route path='/register' element={<Registerats />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Pagecall
