import React from "react";
import contact from "../../Styles/ProjectManagementPage.css";

const ProjectManagement = () => {
  return (
    <>
      {/* Banner Section Start Here */}
      <section className="services-hero">
        <div className="container">
          <div className="row">
            <div className="hero-wrp">
              <h1>Project Management</h1>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End Here */}

      <section className="services-desc">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sr-text-wrp">
                <h2>OUR OFFERINGS</h2>
                <p>
                  Milaya Energy, a dynamic player in the energy sector,
                  specializes in comprehensive project management for oil and
                  gas endeavors. With a focus on exploration, drilling,
                  production, and distribution, Milaya excels in optimizing
                  resource allocation, ensuring safety and environmental
                  compliance, and adapting to industry dynamics. Leveraging
                  cutting-edge technology, the company emphasizes real-time
                  monitoring, risk mitigation, and quality assurance. Milaya
                  Energy fosters a culture of innovation, continuous
                  improvement, and effective communication, positioning itself
                  as a leader in the sustainable and efficient extraction and
                  distribution of energy resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectManagement;
