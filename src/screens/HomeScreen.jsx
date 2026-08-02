import React, { use } from 'react'
import HeroSection from './../components/HeroSection'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  const { invertTheme } = useTheme()
  return (
    <HeroSection>
      <section className="d-flex align-items-center custom-hero-home" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <small className="text-secondary text-uppercase">Full Stack Developer</small>
              <h1 className="display-1 fw-bold mt-3" style={{ lineHeight: "1" }}>BARANI<br /><span className="">DHARAN</span></h1>
              <p className="text-secondary mt-4" style={{ maxWidth: "500px" }}>I design and build modern web applications with clean UI, responsive layouts, and scalable backend solutions.</p>
              <div className="mt-5 d-flex gap-3">
                <Link to={"/projects"} className={`btn btn-${invertTheme} px-4 py-2 rounded-0`}>View Work</Link>
                <Link to={"/contact"} className={`btn btn-outline-${invertTheme} px-4 py-2 rounded-0`}>Contact Me</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center mt-lg-0 mb-3">
              <div className="profile-placeholder mx-auto rounded overflow-hidden" style={{width: "300px", height: "300px",}}>
                <img src="#" alt="Profile" className="w-100 h-100" style={{ objectFit: "cover", filter: "grayscale(100%) contrast(110%)" }} onError={(e) => {
    e.target.style.display = "none";
  }}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeroSection>
  )
}

export default HomeScreen