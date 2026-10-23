import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MdCancel } from "react-icons/md"

import picker from "../utils/picker"
import BaseLayout from "../layouts/BaseLayout"
import { useTheme } from "../contexts/ThemeContext"
import api from "../api/api.config"

const initialContactForm = {
  "full_name": "",
  "from_email": "",
  "subject": "",
  "description": ""
}

const ContactSection = () => {
  const { invertTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()

  const [ errors, setErrors ] = useState()
  const [ contact, setContact ] = useState(initialContactForm)
  const [ response, setResponse ] = useState({
    message: null,
    loading: false,
    error: null
  })
  const handleCancelPlan = () => {
    if(!!location.state) {
      navigate(location.pathname, { replace: true, state: null })
    }
  }
  const handleFormInput = (e) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = {}
    if (!contact.full_name.trim()) {
      errors.full_name = "Oops! Don't forget your name."
    } else if (contact.full_name.length > 30 || contact.full_name.length < 3) {
      errors.full_name = "Please ensure name field is within 30 characters."
    }
    if (!contact.from_email.trim()) {
      errors.email = "Oops! Don't forget your email."
    } else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contact?.from_email))) {
      errors.email = "That doesn't look like a valid email. Give it another look!"
    }
    if (!contact.subject.trim()) {
      errors.subject = "Oops! Don't forget your subject."
    } else if (contact.subject.length > 200 || contact.subject.length < 0) {
      errors.subject = "Please ensure subject field is within 200 characters."
    }
    if (!contact.description.trim()) {
      errors.description = "Oops! Don't forget your description."
    } else if (contact.description.length > 1500 || contact.subject.length < 0) {
      errors.subject = "Please ensure description field is within 1500 characters."
    }
    setErrors(errors)
    if (Object.keys(errors).length > 0) {
      return
    }
    setResponse((prev) => ({ ...prev, loading: true }))
    const { isLead } = picker(location.state?.item, ["isLead"])
    await api.post("/contact/project/request", {...contact, lead: !!isLead && {...picker(location.state?.item, ["name", "price"])}})
    .then((response) => {
      setResponse((prev) => ({ ...prev, message: response.data.message, loading: false, error: null }))
      navigate(location.pathname, { replace: true, state: null })
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
    setContact(initialContactForm)
  }
  return (
    <BaseLayout>
      <section className="py-2" id="contact">
        <div className="container">
          <div className="row align-items-start gy-5">
            <div className="col-lg-5">
              <h2 className="fw-bold display-6 mb-3">
                Have a project in mind? <br />
                Let's work together!
              </h2>
              <p className="text-secondary">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
              {location.state?.item?.map((item, index) => (
                <div className="card border rounded-0 end-0" key={index}>
                  <MdCancel className="position-absolute" size={38} style={{ inset: "-1rem -1rem 0 auto" }} onClick={handleCancelPlan}/>
                  <div className="card-body p-4">
                    <h4 className="fw-bold mb-2">{item.name}</h4>
                    <h3 className="fw-bold mb-3">{item.price}</h3>
                    <p className="text-secondary mb-0">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <form onSubmit={handleSubmit} method="POST">
                <div className="mb-3">
                  <input
                    name="full_name"
                    type="text"
                    className={`form-control border-1 py-3`}
                    placeholder="Your full name"
                    onChange={handleFormInput}
                    value={contact.full_name}
                  />
                  <div className="d-flex justify-content-between">
                    { errors?.full_name && <span className="px-1 text-danger">{ errors?.full_name }</span> }
                    <span className="ms-auto text-muted pe-2">{contact.full_name.length}/30</span>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    name="from_email"
                    type="email"
                    className={`form-control border-1 py-3`}
                    placeholder="Your email address"
                    onChange={handleFormInput}
                    value={contact.from_email}
                  />
                  <div className="d-flex justify-content-between">
                    { errors?.email && <span className="px-1 text-danger">{ errors?.email }</span> }
                    <span className="ms-auto pe-2">{!contact?.email?.trim()? "-": errors?.email? "NOT VALID": "VALID"}</span>
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    name="subject"
                    type="text"
                    className={`form-control border-1 py-3`}
                    placeholder="Project subject"
                    onChange={handleFormInput}
                    value={contact.subject}
                  />
                  <div className="d-flex justify-content-between">
                    { errors?.subject && <span className="px-1 text-danger">{ errors?.subject }</span> }
                    <span className="ms-auto text-muted pe-2">{contact.subject.length}/200</span>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    rows="6"
                    className={`form-control border-1`}
                    placeholder="Tell me about your project..."
                    onChange={handleFormInput}
                    value={contact.description}
                  ></textarea>
                  <div className="d-flex justify-content-between">
                    { errors?.description && <span className="px-1 text-danger">{ errors?.description }</span> }
                    <span className="ms-auto text-muted pe-2">{contact.description.length}/1500</span>
                  </div>
                </div>
                <button className={`btn btn-${invertTheme} px-4 py-2 fw-semibold`} disabled={response.loading}>
                  {
                    response.loading?
                      "Please wait...":
                        "Send Enquiry"
                  }
                </button>
              </form>
            </div>
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
      </section>
    </BaseLayout>
  )
}

export default ContactSection