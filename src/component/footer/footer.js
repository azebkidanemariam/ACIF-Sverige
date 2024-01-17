import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function FooterComponent() {
  return (
    <footer className="container text-start text-muted">
      <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
        <div className="row d-flex justify-content-between ">
          <ul className="col-md-4 col-12 ">
            <h5>Contact Us</h5>
            <li>
              <strong>Email - </strong> apostolic_swe@yahoo.com
            </li>
            <li>
              <strong>Telephone - </strong> +46 73 700 5226
            </li>
            <li>
              <strong>Church Address - </strong> BorgenVägen 16 Danderyd
            </li>
            <li>
              <strong>Postal Address - </strong> FrihetsVägen 54 17733 Järfalla
            </li>
          </ul>

          <ul className="col-md-2 col-6">
            <h5>Services</h5>
            <li>Sunday Service</li>
            <li>Bible Studying</li>
            <li>Sunday School</li>
            <li>Prayer Service</li>
          </ul>
        </div>

        <div className="social-media ">
          <h6>You can find us at</h6>
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
      </div>
    </footer>
  );
}

export default FooterComponent;
