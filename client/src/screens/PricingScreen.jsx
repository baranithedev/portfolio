import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BsCheckCircleFill, BsArrowRight, BsStars, BsCheck2Circle } from "react-icons/bs"

import picker from "../utils/picker"
import BaseLayout from "./../layouts/BaseLayout"
import { useTheme } from "../contexts/ThemeContext"
import { useDataHook } from "../contexts/DataContext"

const PricingScreen = () => {
  const { invertTheme } = useTheme()
  const { fetch_data, loading } = useDataHook()
  const [ time, setTime ] = useState(null)
  const [ select, setSelect ] = useState({
    plan: null,
    time: null,
    selected: false
  })
  const navigate = useNavigate()
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 0)
    return () => clearInterval(interval)
  })
  const handleSelectPlan = (e) => {
    const [plan, time] = e.currentTarget.value.split("/")
    if (!select.selected && select.time===null) {
      setSelect((prev) => ({ ...prev, plan, time, selected: !select.selected }))
    }
    if (select.selected && select.plan == e.currentTarget.value.split("/")[0] && select.time!==null) {
      setSelect((prev) => ({ ...prev, plan: null, time: null, selected: !select.selected }))
    }
  }
  const handleGetStarted = () => {
    const plan = fetch_data?.pricing?.plans.filter(item => item.slug.toUpperCase()===select.plan).map(item => item)
    if (!loading) {
      navigate("/contact", {
        replace: true,
        state: {
          item: [{ ...picker(plan, ["name", "description", "price"]), ...{ isLead: select.selected } }]
        }
      })
    }
  }
  return (
    <BaseLayout>
      <section className="pricing-section py-2">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold">Choose the perfect plan</h1>
            <p className="text-secondary mx-auto pricing-description">Affordable pricing designed for individuals, startups, and businesses. No hidden fees.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {
              fetch_data?.pricing?.plans?.map((plan, index) => (
                <div className="col-lg-4 col-md-6" key={index} inert={select.selected && select.plan !== plan.slug.toUpperCase()}>
                  <div className={`card pricing-card h-100 shadow-sm ${plan.primary ? "pricing-active" : "" }`} >
                    {
                      plan.primary && (
                        <div className="popular-badge">
                          <BsStars className="me-2" />
                          MOST POPULAR
                        </div>
                      )
                    }
                    <div className="card-body p-4 d-flex flex-column">
                      <h3 className="fw-bold">{plan.name}</h3>
                      <p className="text-secondary mb-2">{plan.description}</p>
                      <div className="mb-4">
                        <span className="display-4 fw-bold">{plan.price}</span>
                        {
                          plan.price !== "Custom" && (
                            <span className="text-secondary">{" "}/ project</span>    
                          )
                        }
                      </div>
                      <button value={`${plan.slug}/${time}`.toUpperCase()} className={`d-flex justify-content-center align-items-center col-4 border-0 badge-primary rounded-3 fw-semibold mb-2 p-1 ${select.selected && select.plan === plan.slug.toUpperCase()? "bg-success text-white": null}`} onClick={handleSelectPlan}>
                        {select.selected && select.plan === plan.slug.toUpperCase()? <BsCheckCircleFill className="me-2" />: <BsCheck2Circle className="me-2" />}
                        <span>{select.selected && select.plan === plan.slug.toUpperCase()? "Selected": "Select"}</span>
                      </button>
                      {
                        select.selected && select.plan === plan.slug.toUpperCase()?
                          <button className={`d-flex justify-content-center align-items-center col-12 btn ${plan.primary? `btn-${invertTheme}`: `btn-outline-${invertTheme}`} rounded-3 fw-semibold`} onClick={handleGetStarted}>Get Started
                            <BsArrowRight className="ms-2" />
                          </button>:
                          <button className={`d-flex justify-content-center align-items-center col-12 btn ${plan.primary? `btn-${invertTheme}`: `btn-outline-${invertTheme}`} rounded-3 fw-semibold`} onClick={() => navigate(`/pricing/${btoa(plan.slug)}`)}>{plan.button}
                            <BsArrowRight className="ms-2" />
                          </button>
                      }
                      <hr className="my-4" />
                      <ul className="list-unstyled flex-grow-1">
                        {
                          plan.features.map((feature, i) => (
                            <li key={i} className="d-flex align-items-center mb-3">
                              <BsCheckCircleFill className="me-3 text-success"/>{feature}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

export default PricingScreen