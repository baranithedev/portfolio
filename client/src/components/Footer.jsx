import { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaGithub, FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa"

import { useTheme } from "../contexts/ThemeContext"
import api from "../api/api.config"

const initialSubscriberForm = { "email": "" }

const Footer = () => {
  const year = new Date().getFullYear()
  const { invertTheme } = useTheme()

  const [ errors, setErrors ] = useState()
  const [ subscriber, setSubscriber ] = useState(initialSubscriberForm)
  const [ response, setResponse ] = useState({
    message: null,
    loading: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = {}
    if (!subscriber.email.trim()) {
      errors.email = "Oops! Don't forget your email."
    } else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(subscriber.email))) {
      errors.email = "That doesn't look like a valid email. Give it another look!"
    }
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    }
    setResponse((prev) => ({ ...prev, loading: true }))
    await api.post("/subscriber/send", subscriber)
      .then((response) => {
        setResponse((prev) => ({ ...prev, message: response.data.message, loading: false, error: null }))
      })
      .catch((error) => {
        setResponse((prev) => ({ ...prev, message: null, loading: true, error: error.message }))
      })
      .finally(() => {
        setResponse((prev) => ({ ...prev, loading: false, error: null }))
        setTimeout(() => {
          setResponse((prev) => ({ ...prev, message: null }))
        }, 5000)
      })
    setSubscriber(initialSubscriberForm)
  }
  return (
    <footer className="py-4">
      <div className="border-top container pt-4">
        <div className="row gy-4">
          <div className="col-12 col-lg-4 text-center">
            <h3 className="fw-bold mb-3" style={{ fontFamily: "'Gruppo', sans-serif" }}>BARANIDHARAN.ME</h3>
            <p className="text-secondary mb-0">
              Full Stack Developer crafting modern, responsive, and scalable
              web applications with clean design and performance in mind.
            </p>
          </div>
          <div className="col-6 col-lg-2 col-md-3 text-center">
            <h6 className="fw-semibold mb-3">Navigation</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Projects </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/pricing" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Pricing </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Contact </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> About </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 col-md-3 text-center">
            <h6 className="fw-semibold mb-3">Services</h6>
            <ul className="nav flex-column">
              <li className="nav-link px-0 text-secondary">
                Web Development
              </li>
              <li className="nav-link px-0 text-secondary">
                UI/UX Design
              </li>
              <li className="nav-link px-0 text-secondary">
                API Development
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 col-md-3 text-center">
            <h6 className="fw-semibold mb-3">Legal</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/privacy-policy" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Privacy Policy </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/terms-and-conditions" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}> Terms & Conditions </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 col-md-3 text-center">
            <h6 className="fw-semibold mb-3">Resources</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/how-to-ask-questions-better" className={({ isActive }) => `nav-link px-0 ${ isActive ? `text-${invertTheme}` : "text-secondary" }` }> Ask Better Questions Guide </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/how-to-query-for-bussiness" className={({ isActive }) => `nav-link px-0 ${ isActive ? `text-${invertTheme}` : "text-secondary" }` }> Business Query Guide </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
        <div className="container mt-3">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6 col-md-8">
              <h4 className="fw-bold mb-2">Stay Updated</h4>
              <p className="text-secondary">Get notified about new articles, web development projects, and tech insights. No spam, ever.</p>
              <form onSubmit={handleSubmit} className="row g-2 justify-content-center">
                <div className="col-8 col-sm-8">
                  <input name="email" type="email" value={subscriber.email} className="form-control shadow-none border-2" placeholder="Enter your email address" aria-label="Email address" onChange={(e) => setSubscriber((prev) => ({...prev, [e.target.name]: e.target.value}))} disabled={response.loading}/>
                </div>
                <div className="col-4 col-sm-auto">
                  <button type="submit" className={`btn btn-${invertTheme}`} disabled={response.loading}>{ 
                    response.loading? 
                      <>
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span class="visually" role="status"> Wait...</span>
                      </>: 
                      "Subscribe"
                  }</button>
                </div>
                { errors?.email && <span className="text-center text-danger">{errors?.email}</span> }
              </form>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="d-flex justify-content-center gap-3 py-1 fs-2">
          <a href="https://github.com/baranithedev" target="_blank" rel="noreferrer" className="text-body" > <FaGithub /> </a>
          <a href="https://www.instagram.com/im_b4rn3h_nix" target="_blank" rel="noreferrer" className="text-body" > <FaInstagram /> </a>
          <a href="https://t.me/im_b4rn3h_nix" target="_blank" rel="noreferrer" className="text-body" > <FaTelegramPlane /> </a>
          <a href="https://www.linkedin.com/in/baranidharan-kesavan" target="_blank" rel="noreferrer" className="text-body" > <FaLinkedin /> </a>
        </div>
        <hr className="my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
          <small className="text-secondary">
            © {year} BaraniDharan. All rights reserved
          </small>
        </div>
        <div aria-live="polite" aria-atomic="true" className="toast-container position-fixed bottom-0 my-2" style={{ zIndex: 11 }}>
          <div className={`toast ${!!response.message && "show" } border-1 rounded-0 shadow-none`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">BARANIDHARAN.ME</strong>
              <small className="text-muted"></small>
              <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">{response.message}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer