import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import NotFound from './screens/NotFound'
import PricingScreen from './screens/PricingScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route path='/pricing' element={<PricingScreen/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Header/>
    </BrowserRouter>
  )
}

export default App