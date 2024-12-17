import React from 'react';
import { Camera, Clock, Headset, Settings } from 'lucide-react';

const AboutCards = () => {
  const cardData = [
    {
      icon: <Camera size={40} color="white" />,
      title: 'Expertise',
      description: [
        'We have extensive experience in e-commerce and mobile app development, ensuring high-quality solutions tailored to your business needs.',
        'Our expertise spans across various industries, ensuring that we can deliver top-tier solutions for your business success.',
      ],
      backgroundColor: '#8B5FBF',
      hoverBackgroundColor: '#A06ED0',
      textColor: 'white',
    },
    {
      icon: <Settings size={40} color="white" />,
      title: 'Tailored Solutions',
      description: [
        'We provide bespoke solutions designed to align with your business objectives, ensuring maximum efficiency and success.',
        'Our team works closely with you to understand your goals and deliver a solution that is customized to fit your unique needs.',
      ],
      backgroundColor: '#4169E1',
      hoverBackgroundColor: '#5C8AE8',
      textColor: 'white',
    },
    {
      icon: <Clock size={40} color="white" />,
      title: 'Deliver on Time',
      description: [
        'We have a proven track record of delivering successful projects on time, ensuring that your business stays on schedule.',
        'Our commitment to deadlines guarantees you receive the results you need, exactly when you need them.',
      ],
      backgroundColor: '#9370DB',
      hoverBackgroundColor: '#B291E6',
      textColor: 'white',
    },
    {
      icon: <Headset size={40} color="white" />,
      title: 'Support',
      description: [
        'Our dedicated support team ensures your business operations run smoothly with continuous maintenance and assistance.',
        'From troubleshooting to regular updates, we a re always available to ensure your business keeps moving forward.',
      ],
      backgroundColor: '#2F4F4F',
      hoverBackgroundColor: '#4C7373',
      textColor: 'white',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div
              className="card text-center shadow-lg"
              style={{
                backgroundColor: card.backgroundColor,
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: card.hoverBackgroundColor,
                },
              }}
            >
              <div className="card-body">
                {card.icon}
                <h5 className={`card-title text-${card.textColor} mt-3`}>{card.title}</h5>
                <p className={`card-text text-${card.textColor}`}>{card.description[0]}</p>
                <p className={`card-text text-${card.textColor}`}>{card.description[1]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCards;