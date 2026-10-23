import Header from "../components/Header"
import Footer from "../components/Footer"
import ThemeManager from "../components/ThemeManager"

const BaseLayout = ({ children }) => {
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

export default BaseLayout