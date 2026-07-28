import React from 'react'
import ThemeManager from './ThemeManager'
import Footer from './Footer'

const HeroSection = ({ children }) => {
  return (
    <main className="container-fluid py-1 custom-hero-section">
        { children }
        <ThemeManager/>
        <Footer/>
    </main>
  )
}

export default HeroSection