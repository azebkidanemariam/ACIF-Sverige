import React from "react";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
import SundaySchoolPage from "../pages/sunday-school";
import QuestionAnswerPage from "../pages/question-answer";
import "./navigation.css";
import logo from "../asset/menorah.svg";

function Navigate(props) {
  const handelHome = async (homePage) => {
    const success = HomePage(homePage);
    if (success) props.history.push("/");
  };
  async function handelAbout(contactPage) {
    const success = ContactPage(contactPage);
    if (success) props.history.push("/contactUs");
  }
  const handelQuestion = async (questionPage) => {
    const success = QuestionAnswerPage(questionPage);
    if (success) props.history.push("/questionAnswer");
  };
  const handelSunday = async (sschool) => {
    const success = SundaySchoolPage(sschool);
    if (success) props.history.push("/sundaySchool");
  };

  return (
    <nav className="navbar d-flex flex-row-reverse shadow-lg">
      <ul className="nav ">
        <li className="nav-item">
          <a
            onClick={handelHome}
            className="nav-link fs-6 nav-style"
            aria-current="page"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a
            onClick={handelAbout}
            className="nav-link fs-6 nav-style"
            href="contactUs"
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={handelSunday}
            className="nav-link fs-6 nav-style"
            href="sundaySchool"
          >
            Kids
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={handelQuestion}
            className="nav-link fs-6 nav-style"
            href="questionAnswer"
          >
            Q & A
          </a>
        </li>
      </ul>

      <div
        className="px-3 d-flex justify-content-start  align-items-center "
        style={{ color: "#005581" }}
      >
        <img src={logo} className="logo p-2" alt="a logo" />
        <div className="p-2 w-100">
          <h4>Apostolic Church</h4>
          <h6>Sweden Stockholm</h6>
        </div>
      </div>
    </nav>
  );
}
export default Navigate;
