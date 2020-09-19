import React, { useEffect } from "react";
import "./Projects.css";
import anime from "animejs/lib/anime.es.js";

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
        <div className="htmlLink">HTML</div>
        <div className="cssLink">CSS</div>
        <div className="sassLink">SASS</div>
        <div className="materialLink">Material UI</div>
        <div className="bootstrapLink">Bootstrap</div>
        <div className="javascriptLink">Javascript</div>
        <div className="reactLink">React</div>
        <div className="jqueryLink">Jquery</div>
        <div className="handlebarsLink">Handlebars</div>
        <div className="nodeLink">Node</div>
        <div className="npmLink">npm</div>
        <div className="mongoLink">MongoDB</div>
        <div className="sqlLink">MySQL</div>
        <div className="firebaseLink">Firebase</div>
        <div className="sketchLink">Sketch</div>
        <div className="figmaLink">Figma</div>
        <div className="gitLink">Git</div>
        <div className="herokuLink">Heroku</div>
      </div>
    </div>
  );
}

export default Projects;
