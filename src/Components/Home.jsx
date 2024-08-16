import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import georeImage from "../assets/Dralagar.png";
import aboutImage from "../assets/weuh.jpeg";
import Reactjs from "../assets/ReactN.png";
import Hello from "../assets/Hello.png";
import Gabout from "../assets/Gabout.jpg";
import CSSIcon from "../assets/css.webp"
import Mongodb from "../assets/mongodb.png"
import Next from "../assets/Next.png"
import Node from "../assets/Node.png"
import Bootstrap from "../assets/bootstrap5.png"
import Javascript from "../assets/javascript.png"
import Html from "../assets/html5.png"
import Code from "../assets/Geo.png"
import Daffy from "../assets/Daffy.png"
import PodcastComponent from ".././Podcast";

import Bg from "../../src/assets/bg.jpg"
import "./Styles/Home.css";

const ContactButton = ({ onClick }) => (
  <div className="text-center">
    <h2 className="contact-title">Contact</h2>
    <p className="contact-description">Feel free to reach out and contact me! I'd love to hear from you.</p>
    <Button onClick={onClick} variant="primary" className="animated-button">
      Get In Touch
    </Button>
  </div>
);

const projectsData = [
  {
    title: "TaskTidal",
    description: "Description of Project 1",
    image: Code,
  },
  {
    title: "Daffy",
    description: "Description of Project 2",
    image: Daffy,
  },
];

const blogPostsData = [
  {
    id: 1,
    title: "Technology, a pathway for youth prosperity",
    content: "This is the content of my first blog post.",
    comments: [],
    likes: 0,
    upvotes: 0,
    reposts: 0,
  },
];

const BlogPost = ({ post }) => {
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(post.likes);
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [reposts, setReposts] = useState(post.reposts);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="blog-post card shadow-sm p-4 mb-4 blog-post-card">
      <h4 className="blog-title">{post.title}</h4>
      <p>{post.content}</p>
      <div className="post-actions">
        <Button variant="light" onClick={() => setLikes(likes + 1)} className="action-btn">
          Like ({likes})
        </Button>
        <Button variant="light" onClick={() => setUpvotes(upvotes + 1)} className="action-btn">
          Upvote ({upvotes})
        </Button>
        <Button variant="light" onClick={() => setReposts(reposts + 1)} className="action-btn">
          Repost ({reposts})
        </Button>
      </div>
      <Form onSubmit={handleCommentSubmit} className="comment-form mt-3">
        <Form.Group controlId="comment">
          <Form.Label>Add a comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
      <div className="comments mt-3">
        <h5>Comments:</h5>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (index) => {
    setSelectedProject(projectsData[index]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Container fluid className="bg-container bg-primary py-5">
  <Row className="align-items-center justify-content-center">    
    <Col xs={12} md={6} className="text-center mb-4">
      <img src={Hello} alt="React Logo" className="hello-img fade-in" />
      <h1 className="name">Dralagar George</h1>
      <h2 className="subtitle">Web Developer</h2>
      <p className="description">
        I focus on responsive layouts, delivering innovative solutions,
        fostering business growth through tailored web apps.
      </p>
      <a href="../Components/CV.jsx" className="btn btn-primary me-3">
        Download CV
      </a>
    </Col>
  
    <Col xs={12} md={6} className="text-center mb-4">
      <img
        src={georeImage}
        alt="George"
        className="img-fluid rounded-circle profile-pic"
      />
    </Col>
  </Row>
</Container>



      <Container fluid className="bg-secondary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <h2 className="about-title">About</h2>
            <img src={Gabout} alt="About" className="img-fluid rounded fade-in" />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <p className="about-description">
              👨‍💻 I'm a Web Developer committed to creating responsive and
              user-friendly applications. I also initiate conversations on
              digital content education, focusing on bridging the digital divide.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-tertiary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <h3 className="skills-title">Skills</h3>
            <ul className="skill-list list-unstyled">
              <li className="skill-item">
                <span className="skill-icon"><img src={Html} alt="Html5" className="Html5" /></span>
                
              </li>
              <li className="skill-item">
                <span className="skill-icon"><img src={CSSIcon} alt="About" className="img-fluid rounded fade-in" /></span>
              
              </li>
              <li className="skill-item">
                <span className="skill-icon"><img src={Javascript} alt="React" className="React" /></span>
              </li>
              <li className="skill-item"> <span className="skill-icon"><img src={Reactjs} alt="Reactjs" className="Reactjs" /></span>
                
              </li>
             
              <li className="skill-item">
                <span className="skill-icon"><img src={Node} alt="Nodejs" className="Nodejs" /></span>
                
              </li>
              <li className="skill-item">
                <span className="skill-icon"><img src={Mongodb} alt="Mongodb" className="Mongodb" /></span>
              
              </li>
              <li className="skill-item">
                <span className="skill-icon"><img src={Next} alt="Nextjslogo" className="img-fluid rounded fade-in" /></span>
              </li>
              <li className="skill-item">
                <span className="skill-icon"><img src={Bootstrap} alt="Bootstrap" className="Bootstrap" /></span>
               
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="text-center mb-4">
            <img src={aboutImage} alt="About" className="img-fluid rounded fade-in" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-quaternary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={9} className="text-center mb-4">
            <h3 className="projects-title">Projects</h3>
            <Row>
              {projectsData.map((project, index) => (
                <Col
                  xs={12}
                  md={6}
                  lg={4}
                  key={index}
                  className="mb-4"
                  onClick={() => handleProjectClick(index)}
                >
                  <div className="project-card shadow-sm p-4">
                    <a
                      href="https://tasktidal.netlify.app/"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      Visit Tasktide
                    </a>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image fade-in"
                    />
                    <h4 className="project-title mt-3">{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={9} className="text-center mb-4">
            <h3 className="blog-title">Blog</h3>
            {blogPostsData.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <ContactButton onClick={() => setShowForm(!showForm)} />
          </Col>
          <Col xs={12} md={6} className="text-center mb-4">
            <PodcastComponent />
          </Col>
        </Row>
        {showForm && (
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit} className="contact-form shadow-sm p-4">
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="email" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="message" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Your message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
