import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
// import appStore from '../../img/appStore.png';
// import playStore from '../../img/playStore.png';
import header from "../../images/header.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="container bg-dark">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FontAwesomeIcon className="fas" icon={faMapMarkerAlt} />
              <div class="cta-text">
                <h4 className="text-start">Find us</h4>
                <span>1010 Avenue, Badda - Dhaka</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FontAwesomeIcon className="fas" icon={faPhone} />
              <div class="cta-text">
                <h4 className="text-start">Call us</h4>
                <span>01718556127</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <FontAwesomeIcon className="fas" icon={faEnvelope} />
              <div class="cta-text">
                <h4 className="text-start">Mail us</h4>
                <span>support@ponobilash.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50 text-center">
            <div class="footer-widget">
              <div class="footer-logo">
                <Link href="index.html">
                  <img src={header} cllass="logo-img" alt="logo" />
                </Link>
              </div>
              <div class="footer-text">
                <p className="text-sm-start">
                  Ponno Bilash is here to give you the best product with
                  reasonable price, here you may get all kind of products as you
                  see want.
                </p>
              </div>
              <div class="footer-social-icon">
                <span>Follow us</span>
                <Link to="/">
                  <FontAwesomeIcon
                    className="facebook-bg social-icons"
                    icon={faFacebookSquare}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="twitter-bg social-icons"
                    icon={faTwitterSquare}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="youtube-bg social-icons"
                    icon={faYoutubeSquare}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="youtube-bg social-icons"
                    icon={faInstagramSquare}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    className="youtube-bg social-icons"
                    icon={faLinkedinIn}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3 className="text-start">Useful Links</h3>
              </div>
              <ul className="text-start text-decoration-none">
                <li>
                  <Link to="" className="text-decoration-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    about
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Andriod App
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Ios app
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Special offer
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-decoration-none">
                    Latest News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3 className="text-start">Subscribe</h3>
              </div>
              <div class="footer-text mb-25">
                <p className="text-start">
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below.
                </p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address" />
                  <button>
                    {" "}
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6 text-center text-lg-left">
              <div class="copyright-text">
                <p>
                  Copyright &copy; 2021, All Right Reserved{" "}
                  <Link to="">Ponno Bilash</Link>
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div class="footer-menu">
                <ul>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
