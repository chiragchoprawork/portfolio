// src/components/Resume.js
import React from "react";
import { Button } from "react-bootstrap";
import resume from "../assets/img/Chirag_Chopra_SWE.pdf";
import resumeImg from "../assets/img/Chirag_Chopra_SWE.png";
import { ProjectCard } from "./ProjectCard";

export const Resume = ({ handleDownload }) => {
  const resumeImage = [{ imgUrl: resumeImg }];

  return (
    <section className="resume" id="resume">
    <div>
    <center>
      <p>Please find my resume below.</p>
      
        <Button onClick={handleDownload} variant="primary">
          Download Resume
        </Button>
        <div style={{ marginBottom: '20px' }}></div>
        <a href={resume} target="_blank" rel="noopener noreferrer">
        {resumeImage.map((resumeItem, index) => {
          return (
            <ProjectCard
              key={index}
              imgUrl={resumeItem.imgUrl}
            />
          );
        })}
        </a>
      </center>
    </div>
    </section>
  );
};



