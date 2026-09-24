import ThemeManager from '../components/ThemeManager'

import Header from '../components/Header'
import Footer from '../components/Footer'

const HeroSection = ({ children }) => {
  return (
    <main className="container-fluid custom-hero-section">
        <main className='py-2'>
          <ThemeManager/>
          { children }
        </main>
        <Header />
        <Footer />
    </main>
  )
}

export default HeroSection