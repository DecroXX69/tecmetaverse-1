import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation

const Bigdiv = () => {
  const history = useHistory(); // Initialize useHistory for redirect
  const [index, setIndex] = useState(0);

  // Arrays for background images and text
  const images = [
    'https://via.placeholder.com/1600x900.png?text=Image+1',
    'https://via.placeholder.com/1600x900.png?text=Image+2',
    'https://via.placeholder.com/1600x900.png?text=Image+3'
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

  // Interval to change images and text
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through the images and text
    }, 5000); // 5 seconds interval for image/text change

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Function to handle the button click
  const handleButtonClick = () => {
    alert('Redirected to services');
    // Uncomment the following line when your navbar and routing are set up:
    // history.push('/services');
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
          <button 
            className="btn btn-primary btn-lg mt-4" 
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bigdiv;
