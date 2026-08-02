import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  const navRef = useRef(null)
  useEffect(() => {
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${navRef.current.offsetHeight}px`
      )
    }
    updateHeight()
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <nav ref={navRef} className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold brand" href="/">Barani.Dev</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname==="/"? "active": ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname==="/projects"? "active": ""}`} to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname==="/pricing"? "active": ""}`} to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname==="/contact"? "active": ""}`} to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname==="/about"? "active": ""}`} to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header