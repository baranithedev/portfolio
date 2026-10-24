import BaseLayout from "../layouts/BaseLayout"

export const PrivacyPolicy = () => {
  return (
    <BaseLayout>
      <div className="container">
        <header className="border-bottom pb-4 mb-5">
          <h1 className="fw-bold fs-2 mb-2">Privacy Policy</h1>
          <p className="opacity-75 small mb-0">Last updated: October 2026</p>
        </header>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">1. Information I Collect</h2>
          <p className="opacity-75 mb-3">
            As a personal portfolio website, I minimize data collection. However, depending on how you interact with this site, I may collect:
          </p>
          <ul className="list-unstyled ps-3 mb-0">
            <li className="opacity-75 mb-2">
              <strong className="opacity-100">Contact Information:</strong> Name, email address, and any message details you provide through the contact form.
            </li>
            <li className="opacity-75 mb-0">
              <strong className="opacity-100">Usage Data:</strong> IP addresses, browser types, and anonymized site interaction data collected via analytics tools (e.g., Google Analytics).
            </li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">2. How I Use Your Information</h2>
          <p className="opacity-75 mb-3">The information collected is used solely to:</p>
          <ul className="list-unstyled ps-3 mb-0">
            <li className="opacity-75 mb-2">• Respond directly to your inquiries or project requests.</li>
            <li className="opacity-75 mb-0">• Analyze traffic to optimize website performance and user experience.</li>
          </ul>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">3. Cookies and Tracking</h2>
          <p className="opacity-75 mb-0">
            This website may use cookies to understand how you interact with the content. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">4. Third-Party Services</h2>
          <p className="opacity-75 mb-0">
            I do not sell, trade, or transfer your personal data to outside parties. This does not include trusted third parties who assist in operating the website (such as hosting providers or analytics tools), provided they agree to keep this information confidential.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">5. Contact Me</h2>
          <p className="opacity-75 mb-0">
            If you have any questions regarding this Privacy Policy, you can reach out via the{" "}
            <a href="/contact" className="text-reset text-decoration-underline fw-medium">
              contact form
            </a>{" "}
            on this website.
          </p>
        </section>
      </div>
    </BaseLayout>
  )
}

export const TermsAndConditions = () => {
  return (
    <BaseLayout>
      <div className="container">
        <header className="border-bottom pb-4 mb-5">
          <h1 className="fw-bold fs-2 mb-2">Terms and Conditions</h1>
          <p className="opacity-75 small mb-0">Last updated: October 2026</p>
        </header>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">1. Acceptance of Terms</h2>
          <p className="opacity-75 mb-0">
            By accessing and browsing this portfolio website, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use this website.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">2. Intellectual Property Rights</h2>
          <p className="opacity-75 mb-3">
            Unless otherwise stated, all original source code, designs, graphics, text, and case studies displayed on this website are my intellectual property.
          </p>
          <p className="opacity-75 mb-0">
            You may view and download material for personal, non-commercial caching and viewing purposes only. You must not republish, sell, or duplicate this material without explicit written consent.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">3. Project Disclaimers</h2>
          <p className="opacity-75 mb-0">
            The projects, client case studies, and code samples showcased here are intended to demonstrate professional experience. Past performance on past projects does not guarantee identical results for future systems or clients.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">4. Limitation of Liability</h2>
          <p className="opacity-75 mb-0">
            The information on this website is provided free of charge. I do not warrant its absolute completeness or accuracy, nor do I commit to ensuring that the website remains available or up-to-date. I will not be liable for any direct or indirect loss or damage arising under these terms.
          </p>
        </section>
        <section className="mb-5">
          <h2 className="fs-5 fw-bold mb-3">5. Variations</h2>
          <p className="opacity-75 mb-0">
            I may revise these terms and conditions from time to time. Revised terms will apply to the use of this website from the date of publication.
          </p>
        </section>
      </div>
    </BaseLayout>
  )
}
