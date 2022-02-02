import React, { useEffect } from "react";
import "./Subscribe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import subscribe from "../../images/subscribe.png";
import subsRocket from "../../images/subsRocket.png";
const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section id="contact" className="container pt-5 pb-5">
      <div class="container contact-row">
        <div class="contact-left-col">
          <div data-aos="fade-down" className="d-flex">
            <h1 className="subscribe-title">
              Don't miss our
              <br /> Daily Newsletters
            </h1>
            <img className="rocket" src={subsRocket} alt="" />
          </div>

          <div className="subs-form 1w-100">
            <input
              className="subsInput"
              type="text"
              name="text"
              placeholder="enter your name"
              id=""
            />
            <input
              className="subsInput"
              type="email"
              name="email"
              placeholder="enter your email"
              id=""
            />
            <input
              className="subsInput"
              type="email"
              name="password"
              placeholder="enter your password"
              id=""
            />
            <div class="btn-box">
              <button class="common-btn">Sign up</button>
              <button class="common-btn">Start free trial</button>
            </div>
          </div>

          <div data-aos="fade-up" class="line">
            <span class="line-1"></span> <br />
            <span class="line-2"></span> <br />
            <span class="line-3"></span>
          </div>
        </div>
        <div class="contact-right-col">
          <img
            data-aos="fade-down"
            src={subscribe}
            alt="Subscribe"
            className="img-fluid contact-right-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
