import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import rhinoImage from "./Styles/rhino (1).jpeg";
import dralagarImage from "../assets/Dralagar.jpeg";
import yeiImage from "../assets/YEI.jpg";
import georgeImage from "../assets/George.jpg";

function Portfolio() {
  return (
    <div className="backgr">
      <h1 className="p">Projects</h1>
      <p className="h">Check out my latest projects!</p>

      <Card>
        <div className="container">
          <Row>
            <Col md={3}>
              <Card>
                <h5>Project One</h5>
                <Card.Img variant="top" src={dralagarImage} />
                <Card.Body>
                  <Card.Link href="one">Project One Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <h5>Project Two</h5>
                <Card.Img variant="top" src={yeiImage} />
                <Card.Body>
                  <Card.Link href="orj">Project Two Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <h5>Project Three</h5>
                <Card.Img variant="top" src={georgeImage} />
                <Card.Body>
                  <Card.Link href="poeh">Project Three Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <h5>Project Three</h5>
                <Card.Img variant="top" src={georgeImage} />
                <Card.Body>
                  <Card.Link href="poeh">Project Three Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default Portfolio;
