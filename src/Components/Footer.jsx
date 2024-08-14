import React from "react";
import "./Styles/Footer.css";
import FacebookLogo from "../../src/assets/facebooklogo.png";
import TwitterLogo from "../../src/assets/Xlogo.png";
import LinkedInLogo from "../../src/assets/Linkedin.jpg";
import InstagramLogo from "../../src/assets/IG.jpg";
import YouTubeLogo from "../../src/assets/facebooklogo.png";

const Footer = () => {
  return (
    <div className="footerCon">
      <div className="footerSocials">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} alt="Facebook" className="social-logo" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={TwitterLogo} alt="Twitter" className="social-logo" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="Instagram" className="social-logo" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={YouTubeLogo} alt="YouTube" className="social-logo" />
        </a>
      </div>
      <p>© 2024 Dralagar George. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
