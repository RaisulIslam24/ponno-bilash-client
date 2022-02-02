import React from "react";
import "./AboutUs.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSmile,
  faUser,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Award1 from "../../images/a1.jpg";
import Award2 from "../../images/a2.jpg";
import Award3 from "../../images/a3.jpg";
import Award4 from "../../images/a4.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container bg-light">
        <main className="header-container">
          <div className="text-center">
            <div className="text-white pt-5">
              <h1>WELCOME TO PONNO BILASH</h1>
              <h1>
                EXPERIENCE <span className="fw-bold">PERSONALIZED</span> ONLINE{" "}
              </h1>
              <h1>
                <span className="fw-bold">SHOPPING IN</span> BANGLADESH
              </h1>
            </div>
            <div className="text-white pt-5">
              <h3 className="pt-5 pb-2">
                Ponno Bilash is best online shopping store <br /> in Bangladesh
                that features 1+ million <br /> products at affordable prices.
              </h3>
              <button className="btn btn-danger">CONTACT NOW</button>
            </div>
          </div>
        </main>
        <div className="clients">
          <div className="container d-flex justify-content-around flex-wrap">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faSmile}
                className="fa-3x"
                style={{ color: "orange" }}
              ></FontAwesomeIcon>
              <div className="item figItem">
                <h1>
                  <CountUp start={700} end={800} suffix="+" duration={3} />
                </h1>
                <h6>Happy Clients</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="fa-3x"
                style={{ color: "orange" }}
              ></FontAwesomeIcon>
              <div className="item figItem">
                <h1>
                  <CountUp start={350} end={450} suffix="+" duration={3} />
                </h1>
                <h6>Active Members</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fa-3x"
                style={{ color: "orange" }}
              ></FontAwesomeIcon>
              <div className="item figItem">
                <h1>
                  <CountUp start={800} end={900} suffix="+" duration={3} />
                </h1>
                <h6>Products For Sale</h6>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faTrophy}
                className="fa-3x"
                style={{ color: "orange" }}
              ></FontAwesomeIcon>
              <div className="item figItem">
                <h1>
                  <CountUp start={300} end={400} suffix="+" duration={3} />
                </h1>
                <h6>Cup Of Coffee</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-5 mb-4 fw-bold">Recognition And Awards</h3>
          <p>
            We’re honored to be recognized for quality of service, safety and
            security. Some of the awards we’ve received include:
          </p>
          <div className="d-flex text-center pt-4">
            <div class="card awards mr-2">
              <img src={Award1} class="card-img-top" alt="image8" />
              <p class="card-body">Excellence In Customer Service</p>
            </div>
            <div class="card awards mr-2">
              <img src={Award2} class="card-img-top" alt="image9" />
              <p class="card-body">Best Use Of Technology In Services</p>
            </div>
            <div class="card awards mr-2">
              <img src={Award3} class="card-img-top" alt="image99" />
              <p class="card-body">International Organization Of The Year</p>
            </div>
            <div class="card awards">
              <img src={Award4} class="card-img-top" alt="image88" />
              <p class="card-body">Service And Security: Cluster Of The Year</p>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <h3 className="mt-5 mb-4 fw-bold">Our partners</h3>
          <p>
            These companies are our lifelong partners whose efforts support our
            goals.
          </p>
          <div className="row pt-4">
            <div className="col-md-2 col-6 effect">
              <img
                src="https://i.ibb.co/v4nkQtv/logo-coca-cola.png"
                alt="image1"
              />
            </div>
            <div className="col-md-2 col-6 effect">
              <img
                src="https://i.ibb.co/VwN2FK3/logo-godrej.png"
                alt="image2"
              />
            </div>
            <div className="col-md-2 col-6 effect">
              <img src="https://i.ibb.co/12JXnD2/logo-oppo.png" alt="image3" />
            </div>
            <div className="col-md-2 col-6 effect">
              <img
                src="https://i.ibb.co/ZhktLXH/logo-paypal.png"
                alt="image4"
              />
            </div>
            <div className="col-md-2 col-6 effect">
              <img
                src="https://i.ibb.co/g9DjCfQ/logo-philips.png"
                alt="image5"
              />
            </div>
            <div className="col-md-2 col-6 effect">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-N58w5sQQ1-L2DFCk6b6aGStckDOhEaiaUlLFs4GzPQTI_XFROUNolwUi55wHwrZjXk&usqp=CAU"
                alt="image6"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
