import React from "react"

import HeroSection from "../components/HeroSection"

import { useTheme } from "../contexts/ThemeContext"



const ContactSection = () => {

  const { theme, invertTheme } = useTheme()

  return (

    <HeroSection>

    <section className="py-5" id="contact">

      <div className="container">

        <div className="row align-items-center gy-5">

          <div className="col-lg-5">

            <h2 className="fw-bold display-6 mb-3">

              Have a project in mind? <br />

              Let's work together!

            </h2>

            <p className="text-secondary">

              I'm always open to discussing new projects, creative ideas,

              or opportunities to be part of your vision.

            </p>

          </div>

          <div className="col-lg-6 offset-lg-1">

            <form>

              <div className="mb-3">

                <input

                  type="text"

                  className={`form-control border-0 bg-${theme} py-3`}

                  placeholder="Your full name"

                />

              </div>

              <div className="mb-3">

                <input

                  type="email"

                  className={`form-control border-0 bg-${theme} py-3`}

                  placeholder="Your email address"

                />

              </div>

              <div className="mb-3">

                <input

                  type="text"

                  className={`form-control border-0 bg-${theme} py-3`}

                  placeholder="Project subject"

                />

              </div>

              <div className="mb-3">

                <textarea

                  rows="6"

                  className={`form-control border-0 bg-${theme}`}

                  placeholder="Tell me about your project..."

                ></textarea>

              </div>

              <button className={`btn btn-${invertTheme} px-4 py-2 fw-semibold`}>

                Send Inquiry

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>

    </HeroSection>

  );

};



export default ContactSection;