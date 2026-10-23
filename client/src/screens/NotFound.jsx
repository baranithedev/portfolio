import { Link } from "react-router-dom"

import BaseLayout from "../layouts/BaseLayout"

const NotFound = () => {
  return (
    <BaseLayout>
      <main className="d-flex align-items-center justify-content-center">
        <div className="text-center p-2">
          <h1 className="display-1 fw-bold" style={{ fontSize: "8rem" }}>404</h1>
          <h2 className="fw-semibold">Page Not Found</h2>
          <p className="text-muted">Oops! The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-black px-4">Back to Home</Link>
        </div>
      </main>
    </BaseLayout>
  )
}

export default NotFound
