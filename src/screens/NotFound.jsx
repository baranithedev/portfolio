import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection";

const NotFound = () => {
  return (
    <HeroSection>
      <main className="d-flex align-items-center justify-content-center" style={{ minHeight: "calc(100vh - 2.2rem)"}}>
        <div className="text-center p-2">
          <h1 className="display-1 fw-bold" style={{ fontSize: "8rem" }}>404</h1>
          <h2 className="fw-semibold">Page Not Found</h2>
          <p className="text-muted">Oops! The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-black px-4">Back to Home</Link>
        </div>
      </main>
    </HeroSection>
  );
};

export default NotFound;