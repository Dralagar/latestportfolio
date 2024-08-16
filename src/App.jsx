import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CV from "./Components/CV.jsx";
import Contact from "./Components/Contact.jsx";
import NavBar from "./NavBar.jsx";
import Home from "./Components/Home.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Footer from "./Components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Styles/App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

