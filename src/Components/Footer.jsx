import React from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import "./Styles/Footer.css";
import FacebookLogo from "../../src/assets/facebooklogo.png";
import TwitterLogo from "../../src/assets/Xlogo.png";
import LinkedInLogo from "../../src/assets/Linkedin.jpg";
import InstagramLogo from "../../src/assets/IG.jpg";
import YouTube from "../../src/assets/youtube.png";

const Footer = () => {
  return (
    <footer className="footerCon">
      {/* Top Section: Newsletter and Quick Links */}
      <Container fluid className="footer-top py-4">
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="newsletter-section">
            <h5>Subscribe to our Newsletter</h5>
            <Form className="newsletter-form">
              <Row className="align-items-center">
                <Col>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email Address"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="primary">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col md={4} className="quick-links-section">
            <h5>Quick Links</h5>
            <ul className="quick-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Middle Section: Social Media Icons */}
      <Container fluid className="footerSocials py-3">
        <Row className="justify-content-center">
          <Col xs="auto">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={FacebookLogo} alt="Facebook logo" className="social-logo" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <img src={TwitterLogo} alt="Twitter logo" className="social-logo" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={LinkedInLogo} alt="LinkedIn logo" className="social-logo" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={InstagramLogo} alt="Instagram logo" className="social-logo" />
            </a>
          </Col>
          <Col xs="auto">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src={YouTube} alt="YouTube" className="social-logo" />
            </a>
          </Col>
        </Row>
      </Container>

      {/* Bottom Section: Copyright and Policies */}
      <Container fluid className="footer-bottom py-2">
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="text-center text-md-left">
            <p>© 2024 Dralagar George. All Rights Reserved.</p>
          </Col>
          <Col md={4} className="footer-policies-list text-center text-md-right">
            <ul>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#terms-of-service">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
