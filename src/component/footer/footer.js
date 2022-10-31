import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
function FooterComponent() {
  return (
    <footer className="container">
      <hr></hr>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row d-flex justify-content-between">
          <ul className="col-2">
            <h4>Om ACIF</h4>
            <li>Organization</li>
            <li>Come and worship</li>
            <li> ACIF around the world</li>
            <li>Find address</li>
          </ul>

          <ul className="col-2">
            <h4>We Offer</h4>
            <li>Sunday service</li>
            <li>Bible Study</li>
            <li>Sunday School</li>
            <li>Prayer Service</li>
          </ul>
        </div>
        <div class="social-media">
          <h6>You can find us at</h6>
          <ul class="list-unstyled list-inline d-flex justify-content-center ">
            <li class="list-inline-item">
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
