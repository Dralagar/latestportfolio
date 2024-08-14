import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Components/Styles/NavBar.css";

function NavBar() {
  const [isBreadcrumbVisible, setIsBreadcrumbVisible] = useState(false);
  const location = useLocation();

  const toggleBreadcrumb = () => {
    setIsBreadcrumbVisible(!isBreadcrumbVisible);
  };

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Dralagar.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isBreadcrumbVisible ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleBreadcrumb}
          >
            {isBreadcrumbVisible ? "X" : <span className="navbar-toggler-icon"></span>}
          </button>
          <div className={`collapse navbar-collapse ${isBreadcrumbVisible ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Portfolio" className={isActive("/Portfolio")}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/CV" className={isActive("/CV")}>
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className={isActive("/Contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {isBreadcrumbVisible && (
            <div className="breadcrumb-section">
              <nav className="breadcrumb-nav">
                <Link to="/">Home</Link>
                {/* Add more breadcrumb links here if needed */}
              </nav>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

