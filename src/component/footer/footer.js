import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function FooterComponent() {
  return (
    <footer className="text-start" style={{ color: "#fff" }}>
      <div className="shadow-lg mt-4 rounded p-4 ">
        <div className="row d-flex justify-content-between ">
          <div className="col-sm-3 col-2xl-2 col-12 ">
            <h4>Contact Us</h4>
            <ul style={{ padding: "0px" }}>
              <li>
                <strong>Email Address - </strong> apostolic_swe@yahoo.com
              </li>
              <li>
                <strong>Telephone - </strong> +46 73 700 5226
              </li>
              <li>
                <strong>Church Address - </strong> Borgenvägen 16 Danderyd
              </li>
              <li>
                <strong>Postal Address - </strong> Frihetsvägen 54 17733
                Järfalla
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-12">
            <h4>Services</h4>
            <ul style={{ padding: "0px" }}>
              <li>Sunday Services - 13-00 - 16.00</li>
              <li>Bible Studying - Tuesday and Friday</li>
              <li>Sunday School - Sunday 14:30</li>
              <li>Prayer Service - Tuesday and Friday</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-media nav-style  ">
        <h5>You can find us at</h5>
        <ul className="list-unstyled list-inline d-flex justify-content-center ">
          <li className="list-inline-item">
            <FaFacebook />
          </li>
          <li className="list-inline-item">
            <FaLinkedin />
          </li>
          <li className="list-inline-item">
            <FaTwitter />
          </li>
          <li className="list-inline-item">
            <FaYoutube />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterComponent;
