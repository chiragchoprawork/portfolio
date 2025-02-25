import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/profile.png"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = ({ setActiveTab }) => { 
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Engineer!", "AI Engineer!", "Data Wizard!" ];
  const period = 300;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio!</span>
                <h1>{`Hi! I'm Chirag Chopra`}</h1>
                <h2> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer!", "AI Engineer!", "Data Wizard!" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Looking for a Senior Software Engineer and AI expert who can transform your tech vision into reality? With a dynamic blend of advanced frontend and backend skills, I specialize in building high-performance systems and seamless user experiences. From crafting interactive interfaces with React, Angular, and Next.js to architecting scalable, robust backend solutions using Java, Spring Boot, Django, and microservices, I ensure every project is built to perform. My cloud expertise with AWS, GCP, and Azure empowers me to design efficient, real-time data pipelines, while tools like Apache Kafka, Apache Spark, and Airflow allow me to automate and optimize complex workflows. If you’re looking for someone to integrate cutting-edge machine learning models and deliver AI-driven solutions that are future-ready, I’m here to help you take your technology to the next level!</p>
                  {/* <button onClick={() => setActiveTab("third")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
              </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}