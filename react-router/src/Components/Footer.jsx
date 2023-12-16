import React from "react";
import Logo from "../assets/YEI.jpg";
import "./Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <img src={Logo} alt="" />
      <span>&copy; 2023 Dralagar George. Made with ReactJS.</span>
    </footer>
  );
}

export default Footer;
