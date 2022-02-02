import React from "react";
import "./Contact.css";
import contact from "../../images/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "./../Footer/Footer";

const Contact = () => {
  return (
    <>
      <section className="container bg-light">
        <div className="text-center container">
          <div className="row pt-5 pb-5">
            <div className="col-md-6">
              <img
                data-aos="fade-left"
                className="contact-img"
                src={contact}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div data-aos="fade-up" className="contact-title text-start">
                <h2 className="text-start h2"> Get in touch</h2>
                <p className="p">
                  We'd Love to Hear From You, Lets Get In Touch!
                </p>
              </div>
              <div className="row">
                <div data-aos="fade-down" className="col-6 text-start col-left">
                  <h6 className="fw-bold"> Address</h6>
                  <p className="p">1010 Avenue, Badda - Dhaka</p>
                  <h6 className="fw-bold"> Email</h6>
                  <p className="p">support@ponnobilash.com</p>
                </div>
                <div data-aos="fade-up" className="col-6 text-start col-right">
                  <h6 className="fw-bold"> Phone</h6>
                  <p className="p">01718556127</p>
                  <h6 className="fw-bold"> Additional Information</h6>
                  <p className="p">
                    We are open: Monday - Saturday, 10AM - 8PM and closed on
                    sunday sorry for that.
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="text-start">
                <h6 className="social-text">Social</h6>
                <div className="d-flex social-icon">
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faFacebookSquare}
                  />
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faTwitterSquare}
                  />
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faYoutubeSquare}
                  />
                  <FontAwesomeIcon
                    className="contact-icon"
                    icon={faInstagramSquare}
                  />
                </div>
              </div>
              <div
                data-aos="fade-down"
                className="contact-line text-start mt-3"
              >
                <span class="contact-1"></span> <br />
                <span class="contact-2"></span> <br />
                <span class="contact-3"></span>
              </div>
            </div>
          </div>

          <div className="contact">
            <div className="contact-title-two">
              <h2 data-aos="fade-up" className="h2">
                LEAVE US A MESSAGE
              </h2>
              <p data-aos="fade-up" className="p">
                -Good For Nature, Good For You-
              </p>
            </div>

            <div data-aos="fade-up" className="md-5 pb-5 rounded">
              <div className="d-flex justify-content-between mb-3">
                <input
                  type="text"
                  className="contact-form form-control"
                  placeholder="name"
                  required
                />
                <input
                  type="text"
                  className="contact-form form-control"
                  placeholder="email"
                  required
                />
                <input
                  type="text"
                  className="contact-form form-control"
                  placeholder="number"
                  required
                />
              </div>
              <div className="">
                <textarea
                  className=" form-control"
                  rows="3"
                  type="text"
                  placeholder="message"
                  required
                />
              </div>
              <input type="submit" className="btn btn-danger mt-3" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
