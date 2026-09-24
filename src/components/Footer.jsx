import { NavLink } from "react-router-dom";
import { FaGithub, FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const year = new Date().getFullYear()
  const { invertTheme } = useTheme()

  return (
    <footer className="py-4">
      <div className="border-top container pt-4">
        <div className="row gy-4">
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3">Barani.Dev</h3>
            <p className="text-secondary mb-0">
              Full Stack Developer crafting modern, responsive, and scalable
              web applications with clean design and performance in mind.
            </p>
          </div>
          <div className="col-6 col-lg-2">
            <h6 className="fw-semibold mb-3">Navigation</h6>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => `nav-link px-0 ${isActive ? `text-${invertTheme}` : "text-secondary"}`}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <h6 className="fw-semibold mb-3">Services</h6>
            <ul className="nav flex-column">
              <li className="nav-link px-0 text-secondary">
                Web Development
              </li>
              <li className="nav-link px-0 text-secondary">
                UI/UX Design
              </li>
              <li className="nav-link px-0 text-secondary">
                API Development
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="fw-semibold mb-3">Connect</h6>
            <div className="d-flex gap-3 fs-4">
              <a
                href="https://github.com/baranithedev"
                target="_blank"
                rel="noreferrer"
                className="text-body"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/im_b4rn3h_nix"
                target="_blank"
                rel="noreferrer"
                className="text-body"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/barneh06"
                target="_blank"
                rel="noreferrer"
                className="text-body"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-body"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small className="text-secondary">
            © {year} BaraniDharan. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;