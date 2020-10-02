import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";
import anime from "animejs/lib/anime.es.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import placeholderPic from "../../Images/placeholderPic.webp";
import HomeTemplate from "./ProjectsHome/HomeTemplate";
import IndividualProject from "./IndividualProject/IndividualProject";
import covidHome2 from "../../Images/covidHome2.png";
import groupedHome2 from "../../Images/groupedHome2.png";
import workoutHome from "../../Images/workoutHome.png";
import noteHome2 from "../../Images/noteHome2.png";
import burgerHome2 from "../../Images/burgerHome2.png";
import budgetHome2 from "../../Images/budgetHome2.png";
import passwordHome2 from "../../Images/passwordHome2.png";
import employeeHome2 from "../../Images/employeeHome2.png";
import twitterHome2 from "../../Images/twitterHome2.png";
import booksHome2 from "../../Images/booksHome2.png";
import teamProfileHome from "../../Images/teamProfileHome.png";
import weatherHome2 from "../../Images/weatherHome2.png";
import blogHome2 from '../../Images/blogHome2.png'
import teamHome from '../../Images/teamHome.png';

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
        <HomeTemplate title="Grouped" homepagePic={groupedHome2} />
        <HomeTemplate title="Covid 19 Tracker" homepagePic={covidHome2} />
        <HomeTemplate title="Workout Tracker" homepagePic={workoutHome} />
        <HomeTemplate title="Blog App" homepagePic={blogHome2} />
        <HomeTemplate title="Twitter Clone" homepagePic={twitterHome2} />
        <HomeTemplate title="Employee Tracker" homepagePic={employeeHome2} />
        <HomeTemplate title="Book Finder" homepagePic={booksHome2} />
        <HomeTemplate title="Budget Tracker" homepagePic={budgetHome2} />
        <HomeTemplate title="Password Generator" homepagePic={passwordHome2} />
        <HomeTemplate title="Weather Dashboard" homepagePic={weatherHome2} />
        {/* <HomeTemplate title="Movie A Lister" homepagePic={} /> */}
        <HomeTemplate title="Note Taker" homepagePic={noteHome2} />
        <HomeTemplate title="Burger Devourer" homepagePic={burgerHome2} />
        <HomeTemplate
          title="Team Profile Generator"
          homepagePic={teamHome}
        />
        {/* <HomeTemplate title="5" homepagePic={} /> */}
      </div>
    </div>
  );
}

export default Projects;
