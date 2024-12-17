import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Bigdiv = () => {
  const navigate = useNavigate(); // Initialize useNavigate for redirect
  const [index, setIndex] = useState(0);

  const images = [
    'https://picsum.photos/1600/900?random=1',
    'https://picsum.photos/1600/900?random=2',
    'https://picsum.photos/1600/900?random=3'
  ];

  const titles = [
    'Innovative IT Solutions for Your Business',
    'Transform Your Digital Presence',
    'Customized Strategies for Growth'
  ];

  const descriptions = [
    'We offer advanced IT solutions to help your business grow in the digital world.',
    'Our digital marketing strategies ensure your business reaches the right audience.',
    'We deliver customized strategies to help businesses scale in the digital era.'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = () => {
    alert('Redirected to services');
    navigate('/services'); // Navigate to services page (set up route if required)
  };

  return (
    <div
      className="container-fluid mt-5"
      style={{
        padding: '100px 0',
        backgroundImage: `url(${images[index]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        height: '600px',
        position: 'relative'
      }}
    >
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        <div className="text-center">
          <h1 className="display-4 mb-4">{titles[index]}</h1>
          <p className="lead mb-4">{descriptions[index]}</p>
          <button className="btn btn-primary btn-lg mt-4" onClick={handleButtonClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bigdiv;
