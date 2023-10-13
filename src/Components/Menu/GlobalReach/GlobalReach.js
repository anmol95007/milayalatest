import React, { useState, useEffect } from "react";
import GlobalPage from "../../Styles/GlobalPage.css";
import global_img from '../../Assets/images/global_img.jpg'
import mobile_banner_img from '../../Assets/images/mobile_banner_img.jpg';
import procurment from '../../Assets/images/procurment.jpg'



const GlobalReach = () => {


  return (
    <>
      {/* Banner Section code start from here */}
      <div className="global-container">
        <img src={global_img} alt="banner_img" className="global-desktop-banner" />
        <img src={mobile_banner_img} alt="mobile_banner_img" className="global-mobile-banner" />

        {/* <div className="global-text-container">
          <div className="text-items"> <h1>Welcome slide ONE</h1> </div>
          <div className="text-items"> <h1>Welcome slide ONE</h1> </div>
          <div className="text-items"> <h1>Welcome slide ONE</h1> </div>
          <div className="text-items"> <h1>Welcome slide ONE</h1> </div>
          <div className="text-items"> <h1>Welcome slide ONE</h1> </div>
        </div> */}
      </div>
      {/* Banner Section code start from here */}

      {/* Banner Image-Text Section code start from here */}
      <div className="global-tech-bg">
        <div className="container">
          <div className="row">
            <div className="global-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="global-tech-content">
                  <div className="global-content-title global-content-title-align">Your Procurement Partner</div>

                  <p className="global-content-description global-content-description-align">
                    At Milaya Energy, our advanced systems and services are the foundation of our ability to deliver outsourced procurement support wherever it's needed.
                  </p>
                  <p className="global-content-description global-content-description-align">
                    Our international teams, comprised of experienced buyers and dedicated support personnel, possess deep insights into your market, understand your challenges, and prioritize your needs.
                  </p>

                  <p className="global-content-description global-content-description-align">
                    The result is a unique and customized procurement package designed to meet your specific requirements.
                  </p>

                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="global-tech-logo">
                  <img src={procurment} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}

      {/* Global Map Section code start from here */}
      <div className="g-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607.135663377414!2d55.3870863!3d25.2996457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db017079b37%3A0x2c4199b02f6451dd!2sMilaya%20Energy%20Oilfield%20%26%20Natural%20Gas!5e0!3m2!1sen!2sin!4v1696528207982!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Global Map Section code start from here */}
    </>
  );
};

export default GlobalReach;
