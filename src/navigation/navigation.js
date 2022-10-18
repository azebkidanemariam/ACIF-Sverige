import React from "react";
import HomePage from "../pages/home";
import ContactPage from "../pages/contact";
import SundaySchoolPage from "../pages/sunday-school";
import "./navigation.css";
/* import '../scss/navbar.scss'; */

function Navigate(props) {
  const handelStart = async (homePage) => {
    const success = await HomePage(homePage);
    if (success) props.history.push("/home");
  };
  const handelWeekily = async (contactPage) => {
    const success = await ContactPage(contactPage);
    if (success) props.history.push("/contactUs");
  };
  const handelFavorite = async (sschool) => {
    const success = await SundaySchoolPage(sschool);
    if (success) props.history.push("/sundaySchool");
  };

  return (
    <div className="mt-4">
      {/* <div className="justify-content-start align-items-center">ACIF Sweden</div> */}
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            onClick={handelStart}
            className="nav-link fs-6 nav-style"
            aria-current="page"
            href="home"
          >
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a onClick={handelWeekily} className="nav-link fs-6 nav-style" href="contactUs">
            About Us
          </a>
        </li>
        <li className="nav-item nav-style">
          <a
            onClick={handelFavorite}
            className="nav-link fs-6 nav-style"
            href="sundaySchool"
          >
            For-kids
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navigate;
