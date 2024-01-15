import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function FooterComponent() {
  return (
    <footer className="container">
      <hr />
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row d-flex justify-content-between">
          <ul className="col-4">
            <h4>Contact Us</h4>
            <li>
              <strong>Email:</strong> apostolic_swe@yahoo.com
            </li>
            <li>
              <strong>Telephone:</strong> +46 73 700 5226
            </li>
            <li>
              <strong>Church Address:</strong> BorgenVägen 16 Danderyd
            </li>
            <li>
              <strong>Postal Address:</strong> FrihetsVägen 54 17733 Järfalla
            </li>
          </ul>

          <ul className="col-2">
            <h4>Services</h4>
            <li>Sunday Service</li>
            <li>Bible Studying</li>
            <li>Sunday School</li>
            <li>Prayer Service</li>
          </ul>
        </div>

        <div class="social-media">
          <h6>You can find us at</h6>
          <ul className="list-unstyled list-inline d-flex justify-content-center ">
            <li className="list-inline-item">
              <FaFacebook />
            </li>
            <li class="list-inline-item">
              <FaLinkedin />
            </li>
            <li class="list-inline-item">
              <FaTwitter />
            </li>
            <li class="list-inline-item">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
