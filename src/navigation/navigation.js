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
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg w-100">
      <Link
        className="navbar-brand w-40  d-flex justify-content-center align-items-center"
        to="/"
      >
        <img src={logo} className="logo" alt="a logo" />
        <div className="p-4 color-blue">
          <h4>ACIF</h4>
          <h6>Sweden</h6>
        </div>
      </Link>
      <button
        className="navbar-toggler custom-toggler "
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarNav"
      >
        <ul className="navbar-nav p-2">
          {navigationLinks.map((link) => (
            <li className="nav-item" key={link.name}>
              <Link
                onClick={() => handleNavigation(link.path)}
                className={`fs-6 nav-style w-60 ${
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
