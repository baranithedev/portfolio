import { useMemo } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

import picker from "../utils/picker"
import BaseLayout from "../layouts/BaseLayout"
import { useDataHook } from "../contexts/DataContext"
import { useTheme } from "../contexts/ThemeContext"

const ViewPlanScreen = () => {
  const navigate = useNavigate()
  const { plan } = useParams()
  const { fetch_data, loading } = useDataHook()
  const { invertTheme } = useTheme()
  const getSelectedPlan = useMemo(() => {
    if (!plan || !fetch_data?.pricing?.plans) return []
    try {
      return fetch_data?.pricing?.plans?.filter((item) => item?.slug === atob(plan))
    } catch (error) {
      return []
    }
  }, [plan, fetch_data])
  const handleGetStarted = () => {
    const plan = fetch_data?.pricing?.plans.filter(item => item.slug.toUpperCase()===picker(getSelectedPlan, ["slug"]).slug.toUpperCase()).map(item => item)
    if (!loading) {
      navigate("/contact", {
        replace: true,
        state: {
          item: [{ ...picker(plan, ["name", "description", "price"]), ...{ isLead: !!getSelectedPlan } }]
        }
      })
    }
  }
  return (
    <BaseLayout>
      {
        loading? (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ): getSelectedPlan.length > 0 ? (
            getSelectedPlan.map((item) => (
              <section className="container" key={item.slug}>
                <div className="d-flex align-items-center justify-content-between mb-5">
                  <button className="btn btn-sm border-0 shadow-sm px-3" onClick={() => window.history.back()}>&larr; Back</button>
                  <span className="small text-secondary">
                    Pricing <span className="mx-2">/</span>
                    <span className={`text-${invertTheme === "dark"? "dark": "light"} fw-semibold`}>{item?.name}</span>
                  </span>
                </div>
                <div className="row align-items-center g-4 mb-5">
                  <div className="col-lg-8">
                  <span className="badge border text-dark bg-white rounded-pill px-3 py-2 mb-3">
                     {item?.name} PACKAGE
                  </span>
                  <h1 className="display-4 fw-bold mb-3"> Your next step <br /> starts here.</h1>
                  <p className="fs-5 text-secondary mb-0">{item?.description}</p>
                </div>
                <div className="col-lg-4">
                  <div className="border rounded-4 p-4">
                    <div className="small text-secondary mb-2">YOUR SELECTED PACKAGE</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h2 className="h4 fw-bold mb-0">{item?.name}</h2>
                        <span className="badge text-bg-dark rounded-pill">Selected</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between align-items-end">
                        <div>
                          <div className="small text-secondary mb-1">Project price</div>
                          <div className="h2 fw-bold mb-0">{item?.price}</div>
                        </div>
                        <span className="small text-secondary">One-time</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3 mb-5">
                  <div className="col-6 col-md-4">
                    <div className="bg-body-tertiary rounded-4 p-4 h-100">
                      <div className="small text-secondary mb-2">PACKAGE</div>
                      <div className="h4 fw-bold mb-0">{item?.name}</div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="bg-body-tertiary rounded-4 p-4 h-100">
                      <div className="small text-secondary mb-2">INCLUDED FEATURES</div>
                      <div className="h4 fw-bold mb-0">{item?.features?.length ?? 0}</div>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="bg-body-tertiary rounded-4 p-4 h-100">
                      <div className="small text-secondary mb-2">INVESTMENT</div>
                        <div className="h4 fw-bold mb-0">{item?.price}</div>
                    </div>
                  </div>
                </div>
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="border rounded-4 p-4 p-md-5 h-100">
                      <div className="mb-4">
                        <div className="small text-secondary fw-semibold mb-2">WHAT'S INCLUDED</div>
                        <h2 className="h3 fw-bold mb-2">Everything in your package</h2>
                        <p className="text-secondary mb-0">Explore the services included with {item.name}.</p>
                      </div>
                      <div className="row g-3">
                        {item.features?.map((feature, index) => (
                          <div className="col-12 col-sm-6" key={`${item?.slug}-${index}`}>
                            <div className="border rounded-3 p-3 h-100">
                              <div className="d-flex align-items-start gap-3">
                                <span className="d-flex align-items-center justify-content-center rounded-circle bg-body-tertiary flex-shrink-0 fw-bold" style={{ width: 32, height: 32 }}>
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-grow-1">
                                  <h3 className="h6 fw-semibold mb-2">{feature}</h3>
                                  <span className="small text-secondary">Included in this package</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="card rounded-4 shadow-sm h-100">
                      <div className="card-body p-4 p-md-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <h2 className="h4 fw-bold mb-0">Plan Summary</h2>
                          <span className="badge border text-dark bg-white">{item?.slug}</span>
                        </div>
                        <div className="bg-body-tertiary rounded-3 p-3 mb-4">
                          <div className="small text-secondary mb-2">SELECTED PLAN</div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fw-semibold">{item?.name}</span>
                            <span className="fw-bold">{item?.price}</span>
                          </div>
                          <hr />
                          <div className="d-flex justify-content-between small">
                            <span className="text-secondary">Features</span>
                            <span>{item?.features?.length ?? 0} included</span>
                          </div>
                        </div>
                        <h3 className="h6 fw-bold mb-3">Package Description</h3>
                        <p className="text-secondary small lh-lg mb-4">{item?.description}</p>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="fw-semibold">Total</span>
                          <span className="h3 fw-bold mb-0">{item?.price}</span>
                        </div>
                        <button className="btn btn-dark w-100 py-3 rounded-3 fw-semibold" onClick={handleGetStarted}>Get started &rarr;</button>
                        <p className="text-center text-secondary small mt-3 mb-0">Need clarification? Contact us about this package.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="border-top mt-5 pt-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                    <span className="small text-secondary">
                      {item.name} / Plan Details
                    </span>
                    <Link to="/pricing" className="small text-dark text-decoration-none fw-semibold">Explore Other Plans &rarr;</Link>
                  </div>
                </footer>
              </section>
            ))
        ) : (
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-7 col-lg-5">
                <div className="p-5 text-center">
                  <h2 className="h3 fw-bold mb-3">Plan Not Found</h2>
                  <p className="text-secondary mb-4">This pricing plan doesn't exist or is no longer available.</p>
                  <Link to="/pricing" className="btn btn-dark rounded-pill px-4">Browse Plans</Link>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </BaseLayout>
  )
}

export default ViewPlanScreen