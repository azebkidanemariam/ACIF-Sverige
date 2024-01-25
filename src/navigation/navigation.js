import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/Logo.png";
import "./navigation.css";

function Navigate() {
  const navigate = useNavigate();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
    setIsNavCollapsed(true);
  };

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "WeBelieveIn", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Books", path: "/books" },
    { name: "ContactUs", path: "/contactUs" },
    { name: "QuestionAnswer", path: "/questionAnswer" },
  ];

  const isActiveLink = (path) =>
    (path === "" && window.location.pathname === "/") ||
    window.location.pathname.toLowerCase().startsWith(path.toLowerCase());

  return (
    <nav className="navbar navbar-expand-lg p-2 shadow-lg w-100 ">
      <Link
        className="navbar-brand  w-50 d-flex justify-content-start align-items-center  "
        to="/"
      >
        <img src={logo} alt="a logo" className="logo" />
        <div className="px-4">
          <h4 style={{ color: "#fff" }}>ACIF - Sweden</h4>
        </div>
      </Link>
      <button
        className="navbar-toggler custom-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav  w-50 nav-link">
          {navigationLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <Link
                onClick={() => handleNavigation(link.path)}
                className={`nav-style w-60 ${
                  isActiveLink(link.path) ? "active-link" : ""
                }`}
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigate;
