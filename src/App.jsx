import React from 'react'
import Index from './pages/Index.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Projects from './pages/Projects.jsx'
import Navbar from './pages/Navbar.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Skills from './pages/Skills.jsx'

export default function App() {
  return (
   
   <>
    <BrowserRouter>
    <Navbar/>
   
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/Skills' element={<Skills/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
     
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}
