import React from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3955.2044655431096!2d37.88051807418979!3d7.552670410350463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWachemo%20University%2C%20Post%20Box%20667%2C%20Hosaena%2C%20Ethiopia.!5e0!3m2!1sen!2set!4v1716301125520!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>=
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Wachemo University, Post Box 667, Hosaena, Ethiopia.</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>
                  ksekharabcd@gmail.com
                  <br />
                  eyasutilahun2000@gmail.com
                </p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>
                  +251 465551910
                  <br />
                  Mobile: +251 9170 250 65
                </p>
                <h4>Mobile:</h4>
                <p>+251 913 8888 17</p>
              </div>
            </div>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
