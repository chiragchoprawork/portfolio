import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/wavepulse.png";
import projImg2 from "../assets/img/booksocial.png";
import projImg3 from "../assets/img/otherprojects.png";
import resume from "../assets/img/Chirag_Chopra_SWE.pdf";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import {Contact} from "./Contact"; 
import { Resume } from "./Resume";
import { Link, useNavigate } from 'react-router-dom';


export const Projects = ({ activeTab, setActiveTab }) => {

  // const navigate = useNavigate();

    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = "Chirag_Chopra_SWE.pdf"; // You can change the filename as needed
    link.click();
  };

  // const handleTabSelect = (selectedKey) => {
  //   // Change the URL when a tab is clicked
  //   if (selectedKey === "first") {
  //     navigate("/#projects");
  //   } else if (selectedKey === "second") {
  //     navigate("/#resume");
  //   } else if (selectedKey === "third") {
  //     navigate("/#connect");
  //   }
  // };


  const projects = [
    {
      title: "WavePulse",
      description: "Tracking and Understanding Misinformation on Legacy Radio ",
      imgUrl: projImg1,
      link:"https://wave-pulse.io",
    },
    {
      title: "Book Social Network",
      description: "Full-stack website to create a social network for books lover ",
      imgUrl: projImg2,
      link:"https://github.com/chiragchoprawork/book-social-network ",
    },
    {
      title: "GitHub",
      description: "Here is link to my ",
      imgUrl: projImg3,
      link:"https://github.com/chiragchoprawork ",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                 <center> <h3>Explore my projects to see what I've been working on!</h3></center>
                  {/* <p>Explore my projects to see what I've been working on! </p> */}
                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" >Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Resume</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Contact me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">

                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                  
                        <Resume handleDownload={handleDownload} />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Contact />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}