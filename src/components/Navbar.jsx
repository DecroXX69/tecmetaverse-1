import React,{useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

// Navbar.jsx

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .custom-navbar {
              background: linear-gradient(90deg, 
                  #22D3EE 0%,    /* Cyan */
                  #3B82F6 50%,   /* Blue */
                  #A855F7 100%   /* Purple */
              );
          }

          .custom-navbar .nav-link {
              color: white !important;
              transition: opacity 0.3s;
          }

          .custom-navbar .nav-link:hover {
              opacity: 0.8;
          }

          .navbar-brand {
              color: white !important;
              font-weight: bold;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container">
              <a className="navbar-brand" href="#">TECMETAVERSE</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;