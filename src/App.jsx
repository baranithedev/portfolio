import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import PricingScreen from './screens/PricingScreen'

import NotFound from './screens/NotFound'

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
    </BrowserRouter>
  )
}

export default App
