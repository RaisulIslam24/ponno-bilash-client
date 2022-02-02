import React from 'react';
import './TechnicalSupport.css';
import support from '../../images/support.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope} from '@fortawesome/free-solid-svg-icons';

const TechnicalSupport = () => {
    return (
        <section className="container bg-white pt-5 pb-5">
            <div className="row support-container">
                <div  className="col-md-6">
                    <img data-aos="fade-down" className="support-img" src={support} alt="" />
                </div>
                <div className="col-md-6">
                    <div className="support-text">
                        <h5 data-aos="fade-up" class="support-title">Technical<span className="">Support</span></h5>
                        <h3 data-aos="fade-up" className="support-contact">Contact us now</h3>
                        <div data-aos="fade-up" className=" support-content">
                            <p><span className="support-time">Email:</span>  support@ponobilash.com</p>
                            <p><span className="support-time">Support time:</span> Monday - Friday</p>
                            <p> <span className="support-time"> Response time:</span> 24 hours - 48 hours</p>
                        </div>

                        <Link to="/contact"><button className="support-btn">
                            <FontAwesomeIcon className="su-fas" icon={faEnvelope} /> contact us now</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSupport;