import React from "react";
import { Link } from "react-router-dom";
import "./SpecialOffer.css";
const SpecialOffer = () => {
  return (
    <div className="container bg-white">
      <div class="jumbotron-up">
        <div class="bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xs-12 col-sm-6 mobile-flex">
                <div class="mb-2">
                  <p class="subject">Grand Sale Offer</p>
                </div>
                <h1 class="offer-title mb-5 mb-sm-6">
                  Winter Time: Grab this deal right now, tomorrow might be gone!
                </h1>
                <Link
                  class="btn-offer"
                  href=""
                  data-slug="See our offer"
                  aria-label="See our offer"
                  role="btn-offer"
                  tabindex="0"
                >
                  See Offer
                </Link>

                <div class="mt-3">
                  <div class="money-back-container">
                    <div>
                      <span class="info-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                        </svg>
                      </span>
                      <span class="vertical-middle money-back c-bw-12">
                        Covered by the 30-day money-back guarantee policy.
                        <Link to="" alt="" class="more-info-link">
                          {" "}
                          More info
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-6 pt-7 pt-sm-0">
                <div class="center-block img-responsive">
                  <div class="image-zone">
                    <img
                      class="img-fluid w-100"
                      src="https://i.ibb.co/vzRN098/gold.png"
                      alt="Jumbotron Offer Deal Example"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
