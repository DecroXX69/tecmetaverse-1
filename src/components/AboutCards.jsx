import React from 'react';


const WhyChooseUsCards = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Card 1: Expertise */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow-lg" style={{ backgroundColor: '#6a5acd', transition: 'all 0.3s ease' }}>
            <div className="card-body">
              <i className="fas fa-cogs" style={{ fontSize: '40px', color: 'white' }}></i>
              <h5 className="card-title text-white mt-3">Expertise</h5>
              <p className="card-text text-white">We have extensive experience in e-commerce and mobile app development, ensuring high-quality solutions tailored to your business needs.</p>
              <p className="card-text text-white">Our expertise spans across various industries, ensuring that we can deliver top-tier solutions for your business success.</p>
            </div>
          </div>
        </div>

        {/* Card 2: Tailored Solutions */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow-lg" style={{ backgroundColor: '#4a90e2', transition: 'all 0.3s ease' }}>
            <div className="card-body">
              <i className="fas fa-tools" style={{ fontSize: '40px', color: 'white' }}></i>
              <h5 className="card-title text-white mt-3">Tailored Solutions</h5>
              <p className="card-text text-white">We provide bespoke solutions designed to align with your business objectives, ensuring maximum efficiency and success.</p>
              <p className="card-text text-white">Our team works closely with you to understand your goals and deliver a solution that is customized to fit your unique needs.</p>
            </div>
          </div>
        </div>

        {/* Card 3: Deliver on Time */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow-lg" style={{ backgroundColor: '#8a2be2', transition: 'all 0.3s ease' }}>
            <div className="card-body">
              <i className="fas fa-clock" style={{ fontSize: '40px', color: 'white' }}></i>
              <h5 className="card-title text-white mt-3">Deliver on Time</h5>
              <p className="card-text text-white">We have a proven track record of delivering successful projects on time, ensuring that your business stays on schedule.</p>
              <p className="card-text text-white">Our commitment to deadlines guarantees you receive the results you need, exactly when you need them.</p>
            </div>
          </div>
        </div>

        {/* Card 4: Support */}
        <div className="col-md-3 mb-4">
          <div className="card text-center shadow-lg" style={{ backgroundColor: '#000000', transition: 'all 0.3s ease' }}>
            <div className="card-body">
              <i className="fas fa-headset" style={{ fontSize: '40px', color: 'white' }}></i>
              <h5 className="card-title text-white mt-3">Support</h5>
              <p className="card-text text-white">Our dedicated support team ensures your business operations run smoothly with continuous maintenance and assistance.</p>
              <p className="card-text text-white">From troubleshooting to regular updates, we’re always available to ensure your business keeps moving forward.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCards;
