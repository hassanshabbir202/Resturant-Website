import React from 'react'
import Home from './screens/home/Home'
import Products from './screens/products/Products'
import Menu from './screens/menu/Menu'
import Contact from './screens/contact/Contact'
import { Route, Routes } from 'react-router-dom'
import Foter from "./screens/footer/Foter"
import Login from './components/login/Login'
import Register from './components/register/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Foter/>
    </div>
  )
}

export default App
