import React, { useEffect } from "react";
import "./Projects.css";
import anime from "animejs/lib/anime.es.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import placeholderPic from "../../Images/placeholderPic.webp";
import HomeTemplate from "../ProjectsTemplate/Projects/HomeTemplate";

function Projects() {
  const animateProjects = () => {
    anime({
      targets: ".projects",
      translateY: 200,
    });
  };

 

  useEffect(() => {
    animateProjects();
  }, []);

  return (
    <div className="projects">
      <div className="myProjects">My Projects</div>
      <div className="projectLinks">
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="htmlLink">HTML</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="cssLink">CSS</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="sassLink">SASS</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="materialLink">Material UI</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="bootstrapLink">Bootstrap</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="javascriptLink">Javascript</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="reactLink">React</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="jqueryLink">Jquery</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="handlebarsLink">Handlebars</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="nodeLink">Node</div>
        </Tippy>
      </div>
      <div className="projectLinks2">
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="npmLink">npm</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="mongoLink">MongoDB</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="sqlLink">MySQL</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="firebaseLink">Firebase</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="sketchLink">Sketch</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="figmaLink">Figma</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="gitLink">Git</div>
        </Tippy>
        <Tippy content="blank projects" placement="bottom" duration="200">
          <div className="herokuLink">Heroku</div>
        </Tippy>
      </div>
      <div className="projectsContainer">
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        <HomeTemplate homepagePic={placeholderPic} title="idk" />
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        <HomeTemplate homepagePic={placeholderPic} title="random" />
        
      </div>
    </div>
  );
}

export default Projects;
