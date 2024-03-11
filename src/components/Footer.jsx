// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

 { <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Information</h2>
            <p>Email: abhishektiwary@gmail.com</p>
            <p>Phone: +917366992465</p>
          </div>
          <div className="footer-section">
            <h2>About Me</h2>
            <p>Company Lumiq</p>
          </div>
          <div className="footer-section">
            <h2>Connect with Us</h2>
            <p>GitHub: <a href="https://github.com/Abhishek Tiwary">yourusername</a></p>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div> }