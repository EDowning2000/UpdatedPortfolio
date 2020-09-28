import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";
import anime from "animejs/lib/anime.es.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import placeholderPic from "../../Images/placeholderPic.webp";
import HomeTemplate from "./ProjectsHome/HomeTemplate";
import IndividualProject from "./IndividualProject/IndividualProject";
import covidHome from "../../Images/Covid19 HomePic.png";
import groupedHome from "../../Images/groupedHome.png";
import fitnessHome from "../../Images/fitnessTrackerHome.png";
import notesHome from "../../Images/notesHome.png";
import burgerHome from "../../Images/burgerHome.png";
import budgetHome from "../../Images/budgetHome.png";
import passwordHome from "../../Images/passwordHome.png";
import employeeHome from "../../Images/employeeHome.png";

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
        <HomeTemplate title="Grouped" homepagePic={groupedHome} />
        <HomeTemplate title="Covid 19 Tracker" homepagePic={covidHome} />
        <HomeTemplate title="Workout Tracker" homepagePic={fitnessHome} />
        <HomeTemplate title="Blog App" homepagePic={placeholderPic} />
        <HomeTemplate title="Twitter Clone" homepagePic={placeholderPic} />
        <HomeTemplate title="Employee Tracker" homepagePic={employeeHome} />
        <HomeTemplate title="Book Finder" homepagePic={} />
        <HomeTemplate title="Budget Tracker" homepagePic={budgetHome} />
        <HomeTemplate title="Password Generator" homepagePic={passwordHome} />
        <HomeTemplate title="Weather Dashboard" homepagePic={} />
        <HomeTemplate title="Movie A Lister" homepagePic={} />
        <HomeTemplate title="Note Taker" homepagePic={notesHome} />
        <HomeTemplate title="Burger Devourer" homepagePic={burgerHome} />
        <HomeTemplate title="5" homepagePic={} />
        <HomeTemplate title="5" homepagePic={} />
      </div>
    </div>
  );
}

export default Projects;
