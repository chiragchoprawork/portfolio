import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import githubMark from '../assets/img/github-mark-white.svg';
import googlescholar from '../assets/img/Google_Scholar_logo.svg';
import phoneIcon from '../assets/img/phone-icon.svg';
import emailIcon from '../assets/img/empty-email-svgrepo-com.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = ({ setActiveTab }) => {
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    if (value === "projects") {
      setActiveTab("first"); 
    }
    if (value === "resume") {
      setActiveTab("second"); 
    }
    if (value === "contact") {
        setActiveTab("third");   
      }
      
    }

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
              {/* <Nav.Link
                href="#contact"
                onClick={() => onUpdateActiveLink("contact")}
                className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}>
                Contact Me
              </Nav.Link> */}
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
  <a href="https://www.linkedin.com/in/chiragchopra7/" target="_blank" rel="noopener noreferrer">
    <img src={navIcon1} alt="LinkedIn" />
  </a>
  <a href="https://github.com/chiragchoprawork" target="_blank" rel="noopener noreferrer">
    <img src={githubMark} alt="GitHub" />
  </a>
  <a href="https://scholar.google.com/citations?user=Wju-SIgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
    <img src={googlescholar} alt="Google Scholar" />
  </a>
  {/* Call icon */}
  <a href="tel:+1 9296847051" target="_blank" rel="noopener noreferrer">
    <img src={phoneIcon} alt="Call" />
  </a>
  {/* Email icon */}
  <a href="mailto:cc7083@nyu.edu" target="_blank" rel="noopener noreferrer">
    <img src={emailIcon} alt="Email" />
  </a>
</div>

              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
             
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
};