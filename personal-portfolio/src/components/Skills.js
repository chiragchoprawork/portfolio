import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Row, Col, Container } from "react-bootstrap";


export const Skills = () => {
  
  const pLanguagesKnown = ["Java", "Python", "Javascript", "TS"];
  const formattedLang = pLanguagesKnown.map( (lang,index) => <Col className="skill-sec" key={index}>{lang}</Col>)
  const technology = ["Spring-Boot" ,"ReactJS", "AngularJS", "AWS", "NodeJS", "Docker", "Kubernetes", "Kafka","Airflow","Django","Tailwind"];
  const formattedTech = technology.map((tech,index) => <Col className="skill-sec" key={index}>{tech}</Col>)
  const dbs = ["PostgreSQL", "Cassandra", "MySQL", "MongoDB","S3","DynamoDB","Redis","ElasticSearch"];
  const formatteddbs = dbs.map((dbs,index) => <Col className="skill-sec" key={index}>{dbs}</Col>)
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <Container>
                          <p>Programming Languages:</p>
                          <Row xs="auto" md="auto" l="auto" xl="auto" className="justify-content-center skill-row">
                            {formattedLang}
                          </Row>
                          <p>Frameworks & Libs:</p>
                          <Row xs="auto" md="auto" l="auto" xl="auto" className="justify-content-center skill-row">
                            {formattedTech}
                          </Row>
                          <p>Web Technology and Database:</p>
                          <Row xs="auto" md="auto" l="auto" xl="auto" className="justify-content-center skill-row">
                            {formatteddbs}
                          </Row>
                        </Container>
                        
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Backend" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="FrontEnd" />
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Mobile" />
                                <h5>Distributed Systems</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="SoftSkills" />
                                <h5>Machine Learning</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Skill-background" />
    </section>
  )
}