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

import Clipboard from "react-clipboard.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import anime from "animejs/lib/anime.es.js";

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

  const animateSocial = () => {
    anime({
      targets: ".app_topContainer",
      translateY: 685,
      delay: 100,
    });
  };
  // const animateMain = () => {
  //   anime({
  //     targets: ".app_me",
  //     translateY: 300,
  //   });
  // };

  const animateRight = () => {
    anime({
      targets: ".app_right",
      translateY: 100,
      delay: 100,
    });
  };

  useEffect(() => {
    animateSocial();
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
          <a
            href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
            target="blank"
            className="app_linkedInHover"
          >
            <div className="clickMeLI">Click Me!</div>
            <img
              src={linkedInPic}
              className="app_linkedIn socialLink"
              alt="LinkedIn Logo"
            ></img>
          </a>
          <a
            href="https://github.com/EDowning2000"
            target="blank"
            className="app_githubHover"
          >
            <div className="clickMeGH">Click Me!</div>
            <img
              src={ghPic}
              className="app_github socialLink"
              alt="Github Logo"
            ></img>
          </a>
          <a
            href="https://twitter.com/EmersonDowning1"
            target="blank"
            className="app_twitterHover"
          >
            <div className="clickMeTwit">Click Me!</div>
            <img
              src={twitterPic}
              className="app_twitter socialLink"
              alt="Twitter Logo"
            ></img>
          </a>
          <a
            href="https://www.instagram.com/emersondowning__/?hl=en"
            target="blank"
            className="app_instagramHover"
          >
            <div className="clickMeIG">Click Me!</div>
            <img
              src={igPic}
              className="app_instagram socialLink"
              alt="Instagram Logo"
            ></img>
          </a>
          <Clipboard
            data-clipboard-text="emersondowning@gmail.com"
            className="app_gmailHover"
            onClick={copyFunc}
          >
            <div className="clickToCopy" >{copy}</div>
            <img
              src={gmailPic}
              className="app_gmail socialLink"
              alt="Gmail Logo"
            ></img>
          </Clipboard>
        </div>

        <div className="app_me">
          <div className={show}>
            <Switch>
              <Route exact path="/" exact component={AboutMe} />
              <Route path="/technologies" exact component={Technologies} />
              {/* <Route to="/projects" exact component={Projects}/> */}
            </Switch>
            {/* <AboutMe /> */}
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
                to="/"
                className="projectsLink"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 className="projectsLink">Projects</h1>
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
