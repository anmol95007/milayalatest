import React, { useState, useEffect } from "react";
import EcobuyPage from "../../Styles/EcobuyPage.css";
import ecobuy_banner from '../../Assets/images/ecobuy_banner.jpg'
import ecobuy_mobile_banner from '../../Assets/images/ecobuy_mobile_banner.jpg';


import ecobuy_img_1 from "../../Assets/images/ecobuy_img_1.webp";
import ecobuy_img_2 from "../../Assets/images/ecobuy_img_2.jpg";
import ecobuy_img_3 from "../../Assets/images/ecobuy_img_3.webp";
import ecobuy_img_4 from "../../Assets/images/ecobuy_img_4.jpg";

// import ecobuy_Recycle_02 from "../../Assets/images/ecobuy_Recycle_02.jpg";
// import ecobuy_Recycle_03 from "../../Assets/images/ecobuy_Recycle_03.jpg";
// import ecobuy_Recycle_04 from "../../Assets/images/ecobuy_Recycle_04.jpg";
import ecobuy_Recycle_test from "../../Assets/images/ecobuy_Recycle_test.jpg";


const Ecobuy = () => {
  return (
    <>
      {/* Banner Section code start from here */}
      <div className="global-container">
        <img src={ecobuy_banner} alt="banner_img" className="global-desktop-banner" />
        <img src={ecobuy_mobile_banner} alt="mobile_banner_img" className="global-mobile-banner" />
      </div>

      {/* Banner Section code start from here */}


      {/* Banner Image-Text Section code start from here */}
      {/* Section One */}
      <div className="ecobuy-tech-bg">
        <div className="container">
          <div className="row">
            <div className="ecobuy-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-content">
                  <div className="ecobuy-content-title ecobuy-content-title-align">
                    Reduce , Reuse and Recycle
                  </div>

                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    At Milaya Energy, we have led the way in revolutionizing smart procurement practices within the oil and gas industry. With our highly skilled international team and unparalleled access to manufacturers and vendors worldwide, we've developed systems that optimize procurement, reducing waste and inefficiencies.
                  </p>
                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    Now, it's time to turn our attention to a pressing issue. Sustainability and environmental responsibility have become top priorities for client businesses, industry bodies, governments, and consumers. The focus on environmental concerns is expected to intensify in the coming years, and at Milaya Energy, we fully embrace and support this important cause
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-logo">
                  <img src={ecobuy_img_1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Two */}
      <div className="ecobuy-tech-bg">
        <div className="container">
          <div className="row">
            <div className="ecobuy-tech-rotate">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-logo">
                  <img src={ecobuy_img_2} />
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-content">
                  <div className="ecobuy-content-title ecobuy-content-title-align">
                    Sustainable Future
                  </div>

                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    At Milaya Energy, we're fortunate to have the ability to make a positive impact. We're adapting our working methods and embracing more sustainable choices wherever feasible. Within our own operations, we're actively reducing our carbon footprint and minimizing waste across our offices, facilities, vehicles, and work routines. Furthermore, we understand that we can leverage our influence by encouraging our partners, suppliers, and clients to join us in these efforts.
                  </p>
                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    Annually, we procure millions of items, ranging from major pieces of engineering equipment to smaller MRO items, covering both upstream and downstream sectors and more. We're proactively collaborating with suppliers to ensure they uphold their environmental responsibilities, and we're partnering with industry leaders to provide sustainable product alternatives. This initiative, known as EcoBuy, is a fundamental component of our present and future business strategy."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Section three */}
      <div className="ecobuy-tech-bg">
        <div className="container">
          <div className="row">
            <div className="ecobuy-tech">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-content">
                  <div className="ecobuy-content-title ecobuy-content-title-align">
                    Energy Surplus
                  </div>

                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    At Milaya Energy, we are deeply committed to helping our customers embrace sustainable practices. An excellent illustration of this commitment is our EnergySurplus service, which aids businesses worldwide in the purchase and sale of surplus materials and equipment. This not only contributes to waste reduction and resource conservation but also empowers our customers to unlock the value associated with surplus stock, optimizing their resource utilization.
                  </p>
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-logo">
                  <img src={ecobuy_img_3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Four */}
      <div className="ecobuy-tech-bg">
        <div className="container">
          <div className="row">
            <div className="ecobuy-tech-rotate">
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-logo">
                  <img src={ecobuy_img_4} />
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-6">
                <div className="ecobuy-tech-content">
                  <div className="ecobuy-content-title ecobuy-content-title-align">
                    Circular Economy
                  </div>

                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    At Milaya Energy, we are dedicated to embracing the principles of a circular economy, where resources are optimally utilized to maximize value while minimizing waste. We actively seek partnerships with businesses that share our commitment, both as suppliers and customers, to collectively make significant strides toward sustainable progress.
                  </p>
                  <p className="ecobuy-content-description ecobuy-content-description-align">
                    Our goal is to achieve greater efficiency while reducing resource consumption, which not only benefits our business but also contributes to environmental preservation. It's a strategy that aligns with both business interests and environmental responsibility, reflecting our commitment to a better future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner Image-Text Section code start from here */}
    </>
  );
};

export default Ecobuy;
