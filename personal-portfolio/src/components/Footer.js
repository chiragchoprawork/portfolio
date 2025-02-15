import { Container, Row, Col } from "react-bootstrap";
import topButton from "../assets/img/top button.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}