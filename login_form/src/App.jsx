import React from 'react'
import LoginForm from './components/LoginForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<LoginForm/>}></Route>
          <Route path='/register' element={<RegisterForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
