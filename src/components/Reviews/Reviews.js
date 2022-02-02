import React, { useEffect, useState } from "react";
import "./Reviews.css";

// Carousel package //
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // load reviews from database
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews.length]);

  // Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 3 },
      1000: { items: 3 },
    },
  };

  return (
    <>
      <div className="container bg-white">
        <div className="testimonial-section">
          <div className="testimonial-container">
            <h3 data-aos="fade-up" class="support-contact">
              What Client Says About Us
            </h3>
            <div className="row">
              {reviews.length && (
                <div className="col-md-12">
                  <OwlCarousel
                    id="customer-testimonial"
                    className="owl-carousel owl-theme"
                    {...options}
                  >
                    {reviews?.map((review) => (
                      <Review review={review} key={review._id} />
                    ))}
                  </OwlCarousel>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
