import React from "react";
import Home from "./../Home/Home";
import Footer from "./../Footer/Footer";
import SpecialOffer from "./../SpecialOffer/SpecialOffer";
import Reviews from "./../Reviews/Reviews";
import Community from "../Community/Community";
import FAQs from "./../FAQs/FAQs";
import TechnicalSupport from "./../TechnicalSupport/TechnicalSupport";
import Subscribe from "../Subscribe/Subscribe";
import GoogleMap from "./../GoogleMap/GoogleMap";

const LandingPage = () => {
  return (
    <>
      <Home />
      <SpecialOffer />
      <Reviews />
      <Community />
      <FAQs />
      <TechnicalSupport />
      <Subscribe />
      <GoogleMap />
      <Footer />
    </>
  );
};

export default LandingPage;
