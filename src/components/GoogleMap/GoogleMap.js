import React from 'react';
import './GoogleMap.css';
const GoogleMap = () => {
    return (
        <section className="map-container w-100 pb-5 pt-5 container ">
             <h5 data-aos="fade-up" class="title">Our address<span className=""> On Google</span></h5>
            <div className="col-md-10 map w-100">
                <iframe title="map" className="rounded google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29207.256526814854!2d90.41200259136359!3d23.786323482954455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1627836020236!5m2!1sen!2sbd" ></iframe>
            </div>
        </section>
    );
};

export default GoogleMap;