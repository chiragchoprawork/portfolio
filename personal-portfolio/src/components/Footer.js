import { Container, Row, Col } from "react-bootstrap";
import topButton from "../assets/img/top button.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubMark from '../assets/img/github-mark-white.svg';
import googlescholar from '../assets/img/Google_Scholar_logo.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center">
          <div className="top-button-container">
            <a href="#"><img src={topButton} alt="Logo" /></a>
          </div>
         </Row>
        <Row className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chiragchopra7/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/chiragchoprawork" target="_blank" rel="noopener noreferrer">
                  <img src={githubMark} alt="" />
                </a>
                <a href="https://scholar.google.com/citations?user=Wju-SIgAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <img src={googlescholar} alt="" />
                </a>
              
            </div>
            <p>Copyright 2025. All Rights Reserved Chirag Chopra</p>
        </Row>
      </Container>
    </footer>
  )
}