import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import georeImage from "../assets/Dralagar.jpeg";
import aboutImage from "../assets/weuh.jpeg";
import ReactI from "../assets/ReactN.png";
import Hello from "../assets/Hello.png";
import "./Styles/Home.css";

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Simulating a form submission delay (replace with your actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // After successful submission
      setSubmitted(true);
      // Provide user feedback here, if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error gracefully
    }
  };

  useEffect(() => {
    // Additional logic can be added after form submission if needed
    // This useEffect runs whenever the 'submitted' state changes
  }, [submitted]);

  return (
    <>
      <Container className="BG">
        <div className="home">
          <Row>
            <Col xs={12} md={6} className="mb-2 pt-3">
              <h3 id="description">
                <img
                  src={Hello}
                  alt="React Logo"
                  style={{
                    width: "50px", // Adjust the width as needed
                    height: "auto", // Maintain aspect ratio
                    marginRight: "10px", // Add any additional styles
                  }}
                />
                I'm,
              </h3>
              <h1 className="name">Dralagar George</h1>
              <h2 id="work">Web Developer</h2>
              <p id="experience">
                I focus on responsive layouts. As a developer, I deliver
                innovative solutions, fostering business growth through tailored
                engaging and interactive web apps.
              </p>
              <div>
                <a
                  href="../Components/CV.jsx"
                  className="hovar btn btn-primary"
                  download
                >
                  Download CV
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="pt-5">
              <img src={georeImage} alt="George" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} className="mb-2 pt-3">
            <div className="about">
              <h2>About</h2>
              <p>
                I am a dedicated web developer with a focus on creating
                responsive and user-friendly web applications. My aim is to
                deliver effective solutions that elevate user experiences.
              </p>
            </div>
            <div
              className="skill"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <h3 className="ut">Skills</h3>
              <div
                className="uti"
                style={{
                  display: isHovered ? "flex" : "none",
                  flexDirection: "column",
                }}
              >
                <div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <li>HTML🔸</li>
                    <li>CSS5🏁</li>
                    <li>JavaScript💻</li>

                    <li>
                      React.js
                      <img src={ReactI} alt="George" className="img-fluid" />
                    </li>

                    <li>Node.js📡</li>
                    <li>MongoDB🖥️</li>
                    <li>Next.js</li>
                    <li>Bootstrap🍸</li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="pt-5">
            <img src={aboutImage} alt="George" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <div className="BG">
        <Container>
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Contact</h1>
              <p className="card-text">
                Feel free to reach out and contact me! I'd love to hear from
                you.
              </p>
              <form
                action="https://formsubmit.co/8c1334f955f21f81b0a2bf6d1a1d526e"
                method="POST"
                onSubmit={handleSubmit}
              >
                <Row className="mb-3">
                  <Col md={6}>
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your first name"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your last name"
                      required
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="dev@example.com"
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="0742972922"
                      required
                    />
                  </Col>
                </Row>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
