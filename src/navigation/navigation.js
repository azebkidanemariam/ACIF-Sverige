import React from "react";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
import SundaySchoolPage from "../pages/sunday-school";
import QuestionAnswerPage from "../pages/question-answer";
import "./navigation.css";
import { FaBaby, FaBible, FaHome, FaQuestion } from "react-icons/fa";

function Navigate(props) {
  const handelHome = async (homePage) => {
    const success = await HomePage(homePage);
    if (success) props.history.push("/");
  };
  const handelAbout = async (contactPage) => {
    const success = await ContactPage(contactPage);
    if (success) props.history.push("/contactUs");
  };
  const handelQuestion = async (questionPage) => {
    const success = await QuestionAnswerPage(questionPage);
    if (success) props.history.push("/questionAnswer");
  };
  const handelSunday = async (sschool) => {
    const success = await SundaySchoolPage(sschool);
    if (success) props.history.push("/sundaySchool");
  };

  return (
    <nav className="navbar navbar-light d-flex justify-content-center align-item-center ">
      <div className="navbar navbar-light shadow-lg p-3 mb-3 bg-body rounded container">
        ACIF Sweden
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              onClick={handelHome}
              className="nav-link fs-6 nav-style"
              aria-current="page"
              href="/"
            >
              <FaHome color="#e78026" size={30} /> Home
            </a>
          </li>
          <li className="nav-item ">
            <a
              onClick={handelAbout}
              className="nav-link fs-6 nav-style"
              href="contactUs"
            >
              <FaBible color="#e78026" size={30} /> About Us
            </a>
          </li>
          <li className="nav-item nav-style">
            <a
              onClick={handelSunday}
              className="nav-link fs-6 nav-style"
              href="sundaySchool"
            >
              <FaBaby color="#e78026" size={30} /> Kids
            </a>
          </li>
          <li className="nav-item nav-style">
            <a
              onClick={handelQuestion}
              className="nav-link fs-6 nav-style"
              href="questionAnswer"
            >
              <FaQuestion color="#e78026" size={30} /> Q & A
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigate;
