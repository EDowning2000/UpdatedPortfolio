import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Projects.css";
import anime from "animejs/lib/anime.es.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import HomeTemplate from "./ProjectsHome/HomeTemplate";
import covidHome from "../../Images/covidHome.png";
import groupedHome from "../../Images/groupedHome.png";
import workoutHome from "../../Images/workoutHome.png";
import noteHome from "../../Images/noteHome.png";
import burgerHome from "../../Images/burgerHome.png";
import budgetHome from "../../Images/budgetHome.png";
import passwordHome from "../../Images/passwordHome.png";
import employeeHome from "../../Images/employeeHome.png";
import twitterHome from "../../Images/twitterHome.png";
import booksHome from "../../Images/booksHome.png";
import weatherHome from "../../Images/weatherHome.png";
import blogHome from "../../Images/blogHome.png";
import teamHome from "../../Images/teamHome.png";

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
        <NavLink to="/grouped" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Grouped" homepagePic={groupedHome} />
        </NavLink>
        <NavLink to="/covid" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Covid 19 Tracker" homepagePic={covidHome} />
        </NavLink>
        <NavLink to="/workout" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Workout Tracker" homepagePic={workoutHome} />
        </NavLink>
        <NavLink to="/blog" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Blog App" homepagePic={blogHome} />
        </NavLink>
        <NavLink to="/twitter" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Twitter Clone" homepagePic={twitterHome} />
        </NavLink>
        <NavLink to="/employee" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Employee Tracker" homepagePic={employeeHome} />
        </NavLink>
        <NavLink to="/book" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Book Finder" homepagePic={booksHome} />
        </NavLink>
        <NavLink to="/budget" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Budget Tracker" homepagePic={budgetHome} />
        </NavLink>
        <NavLink to="/password" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate
            title="Password Generator"
            homepagePic={passwordHome}
          />
        </NavLink>
        <NavLink to="/weather" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Weather Dashboard" homepagePic={weatherHome} />
        </NavLink>
        {/* <HomeTemplate title="Movie A Lister" homepagePic={} /> */}
        <NavLink to="/note" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Note Taker" homepagePic={noteHome} />
        </NavLink>
        <NavLink to="/burger" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Burger Devourer" homepagePic={burgerHome} />
        </NavLink>
        <NavLink to="/team" className="textNone" activeStyle={{ textDecoration: "none" }}>
          <HomeTemplate title="Team Profile Generator" homepagePic={teamHome} />
        </NavLink>
        {/* <HomeTemplate title="5" homepagePic={} /> */}
      </div>
    </div>
  );
}

export default Projects;
