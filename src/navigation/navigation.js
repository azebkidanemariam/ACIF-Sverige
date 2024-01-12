/* import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import HomePage from "../pages/home";
import WeBelieveInPage from "../pages/contact";
import QuestionAnswerPage from "../pages/question-answer";
import BookPage from "../pages/books";
import "./navigation.css";
import logo from "../asset/Logo.png";
import SermonsPage from "../pages/sermons";
import ContactPage from "../pages/sunday-school";

function Navigate(props) {
  const { pathname } = props.location;

 

  const isActiveLink = (path) =>
    pathname.toLowerCase().startsWith(path.toLowerCase());

  const handleNavigation = (path) => {
    props.history.push(path);
  };

  const navigationLinks = [
    { name: "Home", component: HomePage },
    { name: "About", component: WeBelieveInPage },
    { name: "Sermons", component: SermonsPage },
    { name: "Books", component: BookPage },
    { name: "ContactUs", component: ContactPage },
    { name: "QuestionAnswer", component: QuestionAnswerPage },
  ];

  return (
    <nav className="navbar d-flex flex-row-reverse shadow-lg">
      <ul className="nav">
        {navigationLinks.map((link) => (
          <li className="nav-item" key={link.name}>
            <a
              onClick={() => handleNavigation(link.path)}
              className={`fs-6 nav-style ${
                isActiveLink(link.path) ? "active-link" : ""
              }`}
              aria-current="page"
              href={link.path}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div
        className="px-3 d-flex justify-content-start align-items-center"
        style={{ color: "#005581" }}
      >
        <img src={logo} className="logo " alt="a logo" />
        <div className="p-2 w-100">
          <h4>ACIF</h4>
          <h6>Sweden Stockholm</h6>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navigate);
 */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/Logo.png";
import "./navigation.css";

function Navigate() {
  const navigate = useNavigate();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sermons", path: "/sermons" },
    { name: "Books", path: "/books" },
    { name: "ContactUs", path: "/contactUs" },
    { name: "QuestionAnswer", path: "/questionAnswer" },
  ];

  const isActiveLink = (path) =>
    (path === "" && window.location.pathname === "/") ||
    window.location.pathname.toLowerCase().startsWith(path.toLowerCase());

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar d-flex flex-row-reverse shadow-lg">
      <ul className="nav">
        {navigationLinks.map((link) => (
          <li className="nav-item" key={link.name}>
            <Link
              onClick={() => handleNavigation(link.path)}
              className={`fs-6 nav-style ${
                isActiveLink(link.path) ? "active-link" : ""
              }`}
              to={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="px-3 d-flex justify-content-start align-items-center"
        style={{ color: "#005581" }}
      >
        <img src={logo} className="logo " alt="a logo" />
        <div className="p-2 w-100">
          <h4>ACIF</h4>
          <h6>Sweden Stockholm</h6>
        </div>
      </div>
    </nav>
  );
}

export default Navigate;
