import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import DashboardPage from './Pages/DashboardPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/register' element={<RegisterPage/>} />
      <Route  path='/login' element={<LoginPage/>} />
      <Route  path='/dashboard' element={<DashboardPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App