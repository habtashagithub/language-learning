import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <section className="newletter">
        <div className="container flexSB">
          <div className="left row">
            <h1>
              Newsletter -Stay tuned and get the latest update on diffrent
              Ethiopian languages.
            </h1>
            <span>We make you speak and hear diverse Ethiopian languages.</span>
          </div>
          <div className="right row">
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="container padding">
          <div className="box link">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Languages</li>
              <li>Cultures</li>
              <li>MOU</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Team</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Wachemo University, Post Box 667, Hosaena, Ethiopia.
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                Phone: +251 465551910
                <br />
                Mobile: +251 9170 250 65
                <br />
                +251 913 8888 17
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                ksekharabcd@gmail.com
                <br />
                eyasutilahun2000@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <i className="fa fa-heart"></i> by Habtamua Shambel
        </p>
      </div>
    </>
  );
};

export default Footer;
