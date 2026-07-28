import React from "react";
import HeroSection from "../components/HeroSection";

const AboutScreen = () => {
  const journey = [
    "Started learning programming fundamentals.",
    "Built my first responsive website.",
    "Explored modern frontend technologies.",
    "Developed full-stack web applications.",
    "Started learning Cyber Security and Linux.",
    "Continuously building real-world projects."
  ]
  return (
    <HeroSection>
    <main className="container">
      <div className="text-start mb-5">
        <span className="badge text-bg-primary px-3 py-2">
          About Me
        </span>
        <h1 className="display-4 fw-bold mt-3">
          My Journey in Technology
        </h1>
        <p className="lead text-secondary me-auto" style={{ maxWidth: "700px" }}>
          Technology started as curiosity and became a passion. Every
          project, challenge, and solution has shaped my path as a
          developer and lifelong learner.
        </p>
      </div>
      <div className="row justify-content-start mb-5">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-lg-5">
              <h3 className="fw-bold mb-3">My Story</h3>
              <p>
                I enjoy building modern web applications that combine
                performance, usability, and clean design. My focus is not
                just writing code but creating meaningful digital
                experiences that solve real-world problems.
              </p>
              <p>
                Alongside web development, I actively explore Linux,
                Cyber Security, and open-source technologies, constantly
                expanding my technical knowledge and practical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <h2 className="fw-bold text-center mb-4">
            Journey Timeline
          </h2>
          {journey.map((data, index) => (
            <div key={index} className="d-flex align-items-start gap-3 mb-4">
              <div
                className="bg-primary rounded-circle flex-shrink-0"
                style={{
                  width: "16px",
                  height: "16px",
                  marginTop: "8px"
                }}
              />
              <div className="border-start ps-4">
                <p className="mb-0">{data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">Problem Solving</h4>
              <p className="text-secondary mb-0">
                Breaking down challenges and creating efficient solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">Cyber Security</h4>
              <p className="text-secondary mb-0">
                Learning secure development practices and system security.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 text-center border-0 shadow-sm rounded-4">
            <div className="card-body p-4">
              <h4 className="fw-bold">Open Source</h4>
              <p className="text-secondary mb-0">
                Exploring technologies and contributing to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    </HeroSection>
  );
};

export default AboutScreen;