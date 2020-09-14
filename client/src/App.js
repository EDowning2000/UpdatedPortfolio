import React, { useState } from "react";
import "./App.css";
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
import Anime from 'react-anime';

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

  const anime 

  return (
    <div className="App">
      <div className="app_socialContainer slideInFromLeft">
        <div className="app_follow">Follow Me</div>
        <a
          href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
          target="blank"
        >
          <img
            src={linkedInPic}
            className="app_linkedIn"
            alt="LinkedIn Logo"
          ></img>
        </a>
        <a href="https://github.com/EDowning2000" target="blank">
          <img src={ghPic} className="app_github" alt="Github Logo"></img>
        </a>
        <a href="https://twitter.com/EmersonDowning1" target="blank">
          <img
            src={twitterPic}
            className="app_twitter"
            alt="Twitter Logo"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/emersondowning__/?hl=en"
          target="blank"
        >
          <img src={igPic} className="app_instagram" alt="Instagram Logo"></img>
        </a>
        <Clipboard data-clipboard-text="emersondowning@gmail.com">
          <img src={gmailPic} className="app_gmail" alt="Gmail Logo"></img>
        </Clipboard>
      </div>

      <div className="app_me">
        <div className={show}>
          <AboutMe />
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
