import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import igPic from "../src/Images/instagramPic.jpg";
import ghPic from "../src/Images/githubPic.png";
import gmailPic from "../src/Images/gmailPic.jpeg";
import twitterPic from "../src/Images/twitterPic.jpg";
import linkedInPic from "../src/Images/LinkedInPic.png";
import AboutMe from "./Components/AboutMe/AboutMe";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/ProjectsTemplate/Projects";
import individualProject from './Components/ProjectsTemplate/IndividualProject/IndividualProject'

import Clipboard from "react-clipboard.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import anime from "animejs/lib/anime.es.js";
import IndividualProject from "./Components/ProjectsTemplate/IndividualProject/IndividualProject";

function App() {
  const [openMenu, setOpenMenu] = useState("false");
  const [open, setOpen] = useState("menu-btn");
  const [hide, setHide] = useState("app_hideElement");
  const [show, setShow] = useState("");
  const [copy, setCopy] = useState("Click To Copy!");

  const openSesame = () => {
    //code to open and hide other portions of the center potion based on the links tab
    if (openMenu === "false") {
      setOpenMenu("true");
      setOpen("menu-btn open");
      setHide("");
      setShow("app_showElement");
    } else {
      setOpenMenu("false");
      setOpen("menu-btn");
      setHide("app_hideElement");
      setShow("");
    }
  };
  const randomClose = () => {
    setShow("");
    setHide("app_hideElement");
    setOpenMenu("false");
    setOpen("menu-btn");
  };

  const animateSocial1 = () => {
    anime({
      targets: ".app_follow",
      translateY: 685,
      delay: 100
    });
  };
  const animateSocial2 = () => {
    anime({
      targets: ".app_linkedInHover",
      translateY: 685,
      delay: 200
    });
  };
  const animateSocial3 = () => {
    anime({
      targets: ".app_githubHover",
      translateY: 685,
      delay: 300
    });
  };
  const animateSocial4 = () => {
    anime({
      targets: ".app_twitterHover",
      translateY: 685,
      delay: 400
    });
  };
  const animateSocial5 = () => {
    anime({
      targets: ".app_instagramHover",
      translateY: 685,
      delay: 500
    });
  };
  const animateSocial6 = () => {
    anime({
      targets: ".app_gmailHover",
      translateY: 685,
      delay: 600
    });
  };

  const animateRight = () => {
    anime({
      targets: ".app_right",
      translateY: 100,
      delay: 100,
    });
  };

  useEffect(() => {
    animateSocial1();
    animateSocial2()
    animateSocial3()
    animateSocial4()
    animateSocial5()
    animateSocial6()
    // animateMain();
    animateRight();
  }, []);

  const copyFunc = () => {
    setCopy("Copied!");
  };



  return (
    <div className="App">
      <Router>
        <div className="app_topContainer" id="app_topContainer">
          <div className="app_follow">Follow Me</div>
          <Tippy content="Click Me!" placement="right" duration="500" >
            <a
              href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
              target="blank"
              className="app_linkedInHover"
            >
              <img
                src={linkedInPic}
                className="app_linkedIn socialLink"
                alt="LinkedIn Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://github.com/EDowning2000"
              target="blank"
              className="app_githubHover"
            >
              <img
                src={ghPic}
                className="app_github socialLink"
                alt="Github Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://twitter.com/EmersonDowning1"
              target="blank"
              className="app_twitterHover"
            >
              <img
                src={twitterPic}
                className="app_twitter socialLink"
                alt="Twitter Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://www.instagram.com/emersondowning__/?hl=en"
              target="blank"
              className="app_instagramHover"
            >
              <img
                src={igPic}
                className="app_instagram socialLink"
                alt="Instagram Logo"
              ></img>
            </a>
          </Tippy>
          <Clipboard
            data-clipboard-text="emersondowning@gmail.com"
            className="app_gmailHover"
            onClick={copyFunc}
          >
            <Tippy
              content={copy}
              interactive={true}
              placement="right"
              duration="500"
            >
              <img
                src={gmailPic}
                className="app_gmail socialLink"
                alt="Gmail Logo"
              ></img>
            </Tippy>
          </Clipboard>
        </div>

        <div className="app_me">
          <div className={show}>
            <Switch>
              <Route exact path="/" exact component={AboutMe} />
              <Route path="/technologies" exact component={Technologies} />
              <Route to="/projects" exact component={Projects} />
              <Route to='/proj1' exact component={IndividualProject}></Route>
              <Route to='/grouped'></Route>
              <Route to='/covid'></Route>
              <Route to='/workout'></Route>
              <Route to='/blog'></Route>
              <Route to='/twitter'></Route>
              <Route to='/employee'></Route>
              <Route to='/book'></Route>
              <Route to='/budget'></Route>
              <Route to='/password'></Route>
              <Route to='/weather'></Route>
              <Route to='/note'></Route>
              <Route to='/burger'></Route>
              <Route to='/team'></Route>


            </Switch>
          </div>

          <div className={hide}>
            <div className="links">
              <NavLink
                to="/"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 onClick={randomClose} className="homeLink">
                  Home
                </h1>
              </NavLink>
              {/* <h1>Home</h1> */}
              <NavLink
                to="/projects"
                className="projectsLink"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 className="projectsLink" onClick={randomClose}>
                  Projects
                </h1>
              </NavLink>

              <NavLink
                to="/technologies"
                className="technologyLink"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 onClick={randomClose} className="technologyLink">
                  Technologies
                </h1>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="app_right">
          <div className={open} onClick={openSesame}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
