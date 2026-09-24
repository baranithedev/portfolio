import { BsCheckCircleFill, BsArrowRight, BsStars } from "react-icons/bs"
import HeroSection from './../layouts/BaseLayout'
import { useTheme } from "../contexts/ThemeContext"
import plans from "./../assests/data/plans"

const PricingScreen = () => {
    const { invertTheme } = useTheme()
  return (
    <HeroSection>
    <section className="pricing-section py-2">
      <div className="container">
        <div className="text-center">
          <h1 className="display-4 fw-bold">Choose the perfect plan</h1>
          <p className="text-secondary mx-auto pricing-description">Affordable pricing designed for individuals, startups, and businesses. No hidden fees.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {
            plans.map((plan, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                    <div
                        className={`card pricing-card h-100 shadow-sm ${
                            plan.primary ? "pricing-active" : ""
                        }`}
                    >
                    {plan.primary && (
                        <div className="popular-badge">
                            <BsStars className="me-2" />
                            MOST POPULAR
                        </div>
                    )}
                        <div className="card-body p-4 d-flex flex-column">
                            <h3 className="fw-bold">{plan.name}</h3>
                            <p className="text-secondary mb-4">{plan.description}</p>
                            <div className="mb-4">
                                <span className="display-4 fw-bold">{plan.price}</span>
                                {plan.price !== "Custom" && (
                                    <span className="text-secondary">
                                        {" "}
                                        / project
                                    </span>
                                )}
                             </div>
                            <button
                                className={`btn ${
                                plan.primary
                                    ? `btn-${invertTheme}`
                                    : `btn-outline-${invertTheme}`
                                } rounded-3 fw-semibold`}
                            >
                                {plan.button}
                                <BsArrowRight className="ms-2" />
                            </button>
                            <hr className="my-4" />
                            <ul className="list-unstyled flex-grow-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="d-flex align-items-center mb-3">
                                        <BsCheckCircleFill className="me-3 text-success"/>
                                        {feature}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
             ))}
            </div>
        </div>
    </section>
    </HeroSection>
  );
};

export default PricingScreen;