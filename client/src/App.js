import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import igPic from "../src/Images/instagramPic.jpg";
import ghPic from "../src/Images/githubPic.png";
import gmailPic from "../src/Images/gmailPic.jpeg";
import twitterPic from "../src/Images/twitterPic.jpg";
import linkedInPic from "../src/Images/LinkedInPic.png";
import AboutMe from "./Components/AboutMe/AboutMe";
import Links from "./Components/Links/Links";

import Clipboard from "react-clipboard.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import anime from "animejs/lib/anime.es.js";
 
//how to do  routes template
//<Router>
//  <Switch>
//    <Route path ='/' exact component={LandingPage} />
//    <Route path ='socia' exact component={socialPage} />
//  </Switch>
//</Router>

//how to do links example
//<Link to='/'>
//  <div>Random filler text</div>
//<Link/>

function App() {
  const [openMenu, setOpenMenu] = useState("false");
  const [open, setOpen] = useState("menu-btn");
  const [hide, setHide] = useState("app_hideElement");
  const [show, setShow] = useState("");

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

  const animateSocial = () => {
    anime({
      targets: ".app_topContainer",
      translateY: 685,
    });
  };
  const animateMain = () => {
    anime({
      targets: ".app_me",
      translateY: 300,
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
    animateSocial();
    animateMain();
    animateRight();
  }, []);

  return (
    <div className="App">
      <div className="app_topContainer" id="app_topContainer">
        <div className="app_follow">Follow Me</div>
        <a
          href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
          target="blank"
        >
          <img
            src={linkedInPic}
            className="app_linkedIn socialLink"
            alt="LinkedIn Logo"
          ></img>
        </a>
        <a href="https://github.com/EDowning2000" target="blank">
          <img
            src={ghPic}
            className="app_github socialLink"
            alt="Github Logo"
          ></img>
        </a>
        <a href="https://twitter.com/EmersonDowning1" target="blank">
          <img
            src={twitterPic}
            className="app_twitter socialLink"
            alt="Twitter Logo"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/emersondowning__/?hl=en"
          target="blank"
        >
          <img
            src={igPic}
            className="app_instagram socialLink"
            alt="Instagram Logo"
          ></img>
        </a>
        <Clipboard data-clipboard-text="emersondowning@gmail.com">
          <img
            src={gmailPic}
            className="app_gmail socialLink"
            alt="Gmail Logo"
          ></img>
        </Clipboard>
      </div>

      <div className="app_me">
        <div className={show}>

      <Router>
        <Switch>
          <Route path="/" exact component={AboutMe}/>
          {/* to be finished later*/}
          {/* <Route path="/projects" exact component={MyProjects}/>
          <Route path="/technologies" exact component={MtTechnologies}/> */}
        </Switch>
      </Router>

          {/* <AboutMe /> */}
        </div>

        <div className={hide}>
          <Links />
        </div>
      </div>
      <div className="app_right">
        <div className={open} onClick={openSesame}>
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
