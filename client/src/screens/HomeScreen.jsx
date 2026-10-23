import { Link } from "react-router-dom"

import IconBase from "../utils/icon_base"
import profile from "/images/profile.png"
import BaseLayout from "./../layouts/BaseLayout"
import { useTheme } from "../contexts/ThemeContext"
import { useDataHook } from "../contexts/DataContext"

const HomeScreen = () => {

  const { theme, invertTheme } = useTheme()
  const { fetch_data } = useDataHook()

  return (
    <BaseLayout>
      <section className="d-flex align-items-center py-2" id="home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1">
              <h1 className="display-1 fw-bold letter-by-letter" style={{ lineHeight: '1' }} >
                {["B", "A", "R", "A", "N", "I"].map((letter, index) => (<span key={index} style={{ animationDelay: `${index * 0.05}s` }} >{letter}</span>))}
                <span>{["D", "H", "A", "R", "A", "N"].map((letter, index) => (<span key={index} style={{ animationDelay: `${(index + 6) * 0.05}s` }} >{letter}</span>))}</span>
              </h1><br />
              <small className="px-2 py-1 bg-secondary-subtle rounded-1 fw-bold">FULL STACK DEVELOPER</small>
              <p className="text-secondary mt-2" style={{ maxWidth: '500px' }}>
                I design and build modern web applications with clean UI,
                responsive layouts, and scalable backend solutions.
              </p>
              <div className="mt-3 d-flex gap-3">
                <Link to="/projects" className={`btn btn-${invertTheme} px-4 py-2 rounded-2`}>View Work</Link>
                <Link to="/contact" className={`btn btn-outline-${invertTheme} px-4 py-2 rounded-2`}>Contact Me</Link>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 d-flex justify-content-center justify-content-lg-end mb-5 mb-lg-0">
              <div className="profile-placeholder overflow-hidden" style={{ width: '349px', height: '349px', }}>
                <img rel="preload" src={profile} alt="Profile" className="w-100 h-100" style={{ objectFit: 'cover', filter: 'grayscale(100%) contrast(110%)' }} onError={(e) => { e.target.style.display = 'none' }} />
              </div>
            </div>
          </div>
          <hr className="border-secondary-subtle" />
          <div className="mb-2">
            <span className="text-uppercase">Tech Stack &amp; Tools</span>
            <h2 className="fw-bold mt-2">Technologies I work with</h2>
            {
              fetch_data?.skills?.categories?.length === 0? <div className="d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100px" }}>
                <span className="text-secondary">No tech stack data available.</span>
              </div>: <div className="skills-categories-scroll">
                <div className="skills-categories-track">
                  {fetch_data?.skills?.categories?.map((category) => (
                  <div key={category.name} className="skills-category">
                      <h5 className="fw-bolder mb-3 text-start">{category.name}</h5>
                      <div className="skills-grid my-2 c">
                        {category.items?.map((tech) => {
                          const Icon = IconBase[tech?.icon]
                          if (!Icon) return null
                          return (
                            <div key={tech.name} className={`skill-item bg-${theme==="dark" && "light text-dark"} border shadow-sm`}>
                              <Icon size={40} color={tech.color || "currentColor"}/>
                              <span className="small fw-bold mt-2">{tech.name}</span>
                              <span style={{ fontSize: "11px" }}>{tech.level}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
          <hr className="border-secondary-subtle" />
          <div className="mt-2">
            <span className="text-uppercase">Featured Projects</span>
            <h2 className="fw-bold mt-2">Projects I've worked on</h2>
            {
              fetch_data?.projects.length === 0? <div className="d-flex align-items-center justify-content-center" style={{ width: "100%", height: "100px" }}>
                <span className="text-secondary">No projects</span>
              </div>: <div>
                
              </div>
            }
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default HomeScreen