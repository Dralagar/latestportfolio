import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import georeImage from "../assets/Dralagar.jpeg";
import aboutImage from "../assets/weuh.jpeg";
import ReactI from "../assets/ReactN.png";
import Hello from "../assets/Hello.png";
import Gabout from "../assets/Gabout.jpg";
import PodcastComponent from "../Podcast";
import "./Styles/Home.css";

const ContactButton = ({ onClick }) => {
  return (
    <div className="text-center">
      <h2>Contact</h2>
      <p>Feel free to reach out and contact me! I'd love to hear from you.</p>
      <Button onClick={onClick} variant="primary">
        Get In Touch
      </Button>
    </div>
  );
};

const projectsData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    image: aboutImage,
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    image: ReactI,
  },
  // Add more projects as needed
];

const blogPostsData = [
  {
    id: 1,
    title: "My First Blog Post",
    content: "This is the content of my first blog post.",
    comments: [],
    likes: 0,
    upvotes: 0,
    reposts: 0,
  },
  // Add more blog posts as needed
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
    <div className="blog-post">
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <div className="post-actions">
        <Button variant="light" onClick={() => setLikes(likes + 1)}>Like ({likes})</Button>
        <Button variant="light" onClick={() => setUpvotes(upvotes + 1)}>Upvote ({upvotes})</Button>
        <Button variant="light" onClick={() => setReposts(reposts + 1)}>Repost ({reposts})</Button>
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
      <Container fluid className="bg-primary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <img src={Hello} alt="React Logo" className="hello-img" />
            <h1 className="name">Dralagar George</h1>
            <h2 className="subtitle">Web Developer</h2>
            <p className="description">
              I focus on responsive layouts. As a developer, I deliver
              innovative solutions, fostering business growth through tailored
              engaging and interactive web apps.
            </p>
            <div>
              <a
                href="../Components/CV.jsx"
                className="btn btn-primary me-3"
                download
              >
                Download CV
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center mb-4">
            <img src={georeImage} alt="George" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-secondary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <h2>About</h2>
            <img src={Gabout} alt="About" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <p className="about-description">
              👨‍💻 Welcome to my portfolio! I'm a results-driven Web Developer
              committed to creating responsive and user-friendly applications
              that elevate digital experiences. With a strong foundation in
              coding and programming, I bring innovative solutions to life.
              <br />
              <br />
              🌐 Beyond the realm of web development, I am deeply passionate
              about leveraging technology for social impact. I initiate
              conversations on digital content education, addressing the
              digital divide in our rapidly evolving world. My goal is to
              empower marginalized communities through practical tech education
              and skill acquisition, ensuring no one is left behind in the
              digital revolution.
              <br />
              <br />
              💡 As a Political Scientist, Youth Advocate, and Tech Enthusiast,
              I blend diverse knowledge in policy and governance with
              cutting-edge tech skills. I champion digital livelihoods,
              promoting sustainability and resilience and an inclusive digital
              future.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-tertiary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <h3 className="mb-3">Skills</h3>
            <ul className="skill-list">
              <li>HTML🔸</li>
              <li>CSS5🏁</li>
              <li>JavaScript💻</li>
              <li>
                React.js <img src={ReactI} alt="George" className="img-fluid" />
              </li>
              <li>Node.js📡</li>
              <li>MongoDB🖥️</li>
              <li>Next.js</li>
              <li>Bootstrap🍸</li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="text-center mb-4">
            <img src={aboutImage} alt="About" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Project Section */}
      <Container fluid className="bg-quaternary py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={9} className="text-center mb-4">
            <h3 className="mb-3">Projects</h3>
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
                  <div className="project-card">
                    <a href="https://tasktidal.netlify.app/" rel="noopener noreferrer">Visit Tasktide</a>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
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

      {/* Blog Section */}
      <Container fluid className="bg-light py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={9} className="text-center mb-4">
            <h3 className="mb-3">Blog</h3>
            {blogPostsData.map((post) => (
              <BlogPost key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container fluid className="bg-light py-5">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="text-center mb-4">
            <ContactButton onClick={() => setShowForm(!showForm)} />
          </Col>
        </Row>
        {showForm && (
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="email" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="message" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Write your message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>

      {/* Podcast Section */}
      <Container fluid className="bg-quinary py-5">
        <PodcastComponent />
      </Container>
    </>
  );
};

export default Home;
