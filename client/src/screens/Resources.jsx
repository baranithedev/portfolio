import BaseLayout from "../layouts/BaseLayout"

const DocumentationTemplate = ({ content }) => {
  return (
    <div className="shadow-sm rounded-3 overflow-hidden">
      <pre className="p-3 mb-0 small text-body" style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>
        <code>{content}</code>
      </pre>
    </div>
  )
}

export const HowToAskGoodQuestions = () => {
  const template = `Subject:\n[Write a short, descriptive title]\n\nContext:\n[Explain the background and what you are trying to achieve]\n\nQuestion:\n[Ask your specific question]\n\nWhat I have tried:\n[Describe your attempts, if applicable]\n\nExpected result:\n[Explain what outcome or information you need]\n\nAdditional details:\n[Include relevant examples, error messages, links, or constraints]\n`

  return (
    <BaseLayout>
      <div className="container">
        <header className="border-bottom pb-4 mb-4">
          <h1 className="fw-bold fs-2 mb-2">General Questions</h1>
          <p className="text-body-secondary small mb-0">Documentation for asking clear questions, requesting information, reporting problems, and seeking assistance.</p>
        </header>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">Overview</h2>
          <p className="text-body-secondary mb-0">Use this guide when you need information, technical assistance, clarification, feedback, or recommendations. A well-structured question helps the recipient understand your situation and provide an accurate, useful response.</p>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">How to Ask a Good Question</h2>
          <div className="border rounded-3 p-3">
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">1. Provide Context</h3>
              <p className="small text-body-secondary mb-0">Explain the situation, your goal, and any background information necessary to understand the question.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">2. State the Question Clearly</h3>
              <p className="small text-body-secondary mb-0">Ask a specific question. If you have multiple questions, organize them into separate points.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">3. Include Relevant Details</h3>
              <p className="small text-body-secondary mb-0">Provide examples, error messages, links, requirements, or other details that help explain the situation.</p>
            </div>
            <div>
              <h3 className="fs-6 fw-semibold">4. Explain Your Expected Outcome</h3>
              <p className="small text-body-secondary mb-0">Describe the information, solution, or result you want to receive.</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">Examples</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="border border-danger-subtle rounded-3 p-3 h-100">
                <span className="badge bg-danger mb-2">Poor question</span>
                <p className="small mb-2">My application is not working. Please help.</p>
                <p className="small text-body-secondary mb-0">Problem: The application, error, environment, and expected result are not specified.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border border-success-subtle rounded-3 p-3 h-100">
                <span className="badge bg-success mb-2">Improved question</span>
                <p className="small mb-2">My React application displays a blank page after I add a new component. I am using Vite and React. The browser console reports an import error. How can I identify and fix the problem?</p>
                <p className="small text-body-secondary mb-0">Why it works: It identifies the technology, describes the problem, provides an error clue, and asks for a specific solution.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-2">General Question Template</h2>
          <p className="small text-body-secondary mb-3">Copy this template and replace the placeholders with your own information.</p>
          <DocumentationTemplate title="general-question.txt" content={template} />
        </section>

        <section className="mb">
          <h2 className="fs-5 fw-bold mb-3">Before Submitting</h2>
          <ul className="small text-body-secondary ps-3 mb-0">
            <li className="mb-2">Use a descriptive subject or title.</li>
            <li className="mb-2">Make sure the main question is easy to identify.</li>
            <li className="mb-2">Include only relevant background information.</li>
            <li className="mb-2">Check that examples, links, and error messages are accurate.</li>
            <li>Avoid sharing passwords, API keys, or other confidential information.</li>
          </ul>
        </section>
      </div>
    </BaseLayout>
  )
}

export const HowtoQuriesForBusiness = () => {
  const template = `Project Title:\n[Name of the project]\n\nProject Overview:\n[Brief description of the proposed project]\n\nBusiness Objective:\n[Problem to solve or goal to achieve]\n\nTarget Audience:\n[Who will use the product or service?]\n\nScope and Requirements:\n[List the required features, modules, and integrations]\n\nTechnology Preferences:\n[Preferred technologies, platforms, or constraints]\n\nDeliverables:\n[Expected outputs or completed features]\n\nTimeline:\n[Target start date, milestones, and deadline]\n\nBudget:\n[Estimated budget or budget range]\n\nAdditional Requirements:\n[Design preferences, maintenance, security, hosting, or other needs]\n`

  return (
    <BaseLayout>
      <div className="container">
        <header className="border-bottom pb-4 mb-4">
          <h1 className="fw-bold fs-2 mb-2">Project & Business Queries</h1>
          <p className="text-body-secondary small mb-0">Documentation for project proposals, development requests, feature specifications, quotations, estimates, and business solutions.</p>
        </header>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">Overview</h2>
          <p className="text-body-secondary mb-0">Use this guide when requesting a new project, discussing a business solution, requesting a quotation, or planning software development. Clear requirements help establish project scope, estimate costs, identify risks, and set realistic expectations.</p>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">How to Structure a Project Request</h2>
          <div className="border rounded-3 p-3">
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">1. Project Objective</h3>
              <p className="small text-body-secondary mb-0">Explain the business problem, the purpose of the project, and the outcome you want to achieve.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">2. Scope and Requirements</h3>
              <p className="small text-body-secondary mb-0">Describe the essential features, pages, modules, integrations, user roles, and technical requirements.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">3. Target Audience</h3>
              <p className="small text-body-secondary mb-0">Identify the intended users, customers, or stakeholders and explain their needs.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">4. Timeline and Deliverables</h3>
              <p className="small text-body-secondary mb-0">Specify the expected completion date, important milestones, and what should be delivered.</p>
            </div>
            <div className="mb-3">
              <h3 className="fs-6 fw-semibold">5. Budget and Constraints</h3>
              <p className="small text-body-secondary mb-0">Provide an estimated budget range and mention relevant constraints, dependencies, or technology preferences.</p>
            </div>
            <div>
              <h3 className="fs-6 fw-semibold">6. Acceptance Criteria</h3>
              <p className="small text-body-secondary mb-0">Explain how you will determine whether the completed project meets your requirements.</p>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">Examples</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="border border-danger-subtle rounded-3 p-3 h-100">
                <span className="badge bg-danger mb-2">Poor request</span>
                <p className="small mb-2">I need an e-commerce website. Tell me the cost and finish it quickly.</p>
                <p className="small text-body-secondary mb-0">Problem: The features, target users, budget, timeline, and delivery expectations are unclear.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border border-success-subtle rounded-3 p-3 h-100">
                <span className="badge bg-success mb-2">Improved request</span>
                <p className="small mb-2">I need a responsive e-commerce website for a small retail business. It should include product listings, search, a shopping cart, customer authentication, payment integration, and an admin dashboard. Please provide an estimated development cost, proposed technology stack, delivery milestones, and maintenance options.</p>
                <p className="small text-body-secondary mb-0">Why it works: It establishes the project type, essential features, and the information needed for an initial estimate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-2">Project Query Template</h2>
          <p className="small text-body-secondary mb-3">Copy this template to prepare a project proposal or request a quotation.</p>
          <DocumentationTemplate content={template} />
        </section>

        <section className="mb">
          <h2 className="fs-5 fw-bold mb-3">Project Request Checklist</h2>
          <ul className="small text-body-secondary ps-3 mb-0">
            <li className="mb-2">Define the problem and expected business outcome.</li>
            <li className="mb-2">Separate essential features from optional enhancements.</li>
            <li className="mb-2">Identify the target audience and intended platforms.</li>
            <li className="mb-2">Specify the timeline, budget, and required deliverables.</li>
            <li className="mb-2">Mention external services, integrations, and dependencies.</li>
            <li>Define acceptance criteria and any post-launch support requirements.</li>
          </ul>
        </section>
      </div>
    </BaseLayout>
  )
}