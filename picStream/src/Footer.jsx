import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer-logo">
         <img src="logo.png" alt="" />
         <h2>PicStream</h2>
        
       </div>
      <div className="footer-content">
       
      <p>Your AI-powered image inspiration</p>
        <div className="footer-links">
        
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Policy">Privacy Policy</Link>
       
        </div>
        
        {/* <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PicStream. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
