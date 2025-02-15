import {SkillComponent} from './SkillComponent';
import dockerImage from "../assets/img/docker-svgrepo-com.svg"
import reaactImage from "../assets/img/React.png"
import tsImage from "../assets/img/ts-logo-256.svg"
import javaImage from "../assets/img/java-icon.svg"
import springBootImage from "../assets/img/spring-boot-1.svg"
import nodejsImage from "../assets/img/nodejs-logo-svgrepo-com.svg"
import pythonImage from "../assets/img/python-5.svg"
import djangoImage from "../assets/img/django.svg"
export const Skill = () => {
    const skills = [
        {name:"Java",image:javaImage},
        {name:"SpringBoot",image:springBootImage},
        { name: "React", image: reaactImage },
        { name: "Node.js", image: nodejsImage },
      {name:"Django",image:djangoImage},
      { name: "Python", image: pythonImage },
      {name:"TypeScript", image:tsImage},
      {name:"Docker",image:dockerImage},
    //   {name:"Test",image:dockerImage},

    ];
  
    return (

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <SkillComponent
            key={index}
            skillImage={skill.image}
            skillName={skill.name}
          />
        ))}
      </div>
    );
  };