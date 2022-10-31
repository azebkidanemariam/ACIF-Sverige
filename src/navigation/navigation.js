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
    <nav className="navbar navbar-light nav-container">
      <div className="nav-container shadow-lg p-3 mb-1 bg-body rounded container d-felx justify-content-end ">
        <ul className="nav">
          <li className="nav-item">
            <a
              onClick={handelHome}
              className="nav-link fs-6 nav-style"
              aria-current="page"
              href="/"
            >
              <div>
                <FaHome color="#e78026" size={20} />
              </div>
              Home
            </a>
          </li>
          <li className="nav-item ">
            <a
              onClick={handelAbout}
              className="nav-link fs-6 nav-style"
              href="contactUs"
            >
              <div>
                <FaBible color="#e78026" size={21} />
              </div>
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={handelSunday}
              className="nav-link fs-6 nav-style"
              href="sundaySchool"
            >
              <div>
                <FaBaby color="#e78026" size={22} />{" "}
              </div>
              Kids
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={handelQuestion}
              className="nav-link fs-6 nav-style"
              href="questionAnswer"
            >
              <div>
                <FaQuestion color="#e78026" size={23} />
              </div>
              Q & A
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigate;
