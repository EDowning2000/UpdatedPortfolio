import React, { useState, useRef } from "react";
import "./App.css";
import igPic from "../src/Images/instagramPic.jpg";
import ghPic from "../src/Images/githubPic.png";
import gmailPic from "../src/Images/gmailPic.jpeg";
import twitterPic from "../src/Images/twitterPic.jpg";
import linkedInPic from "../src/Images/LinkedInPic.png";
import HamburgerBtn from "./Components/HamburgerBtn/HamburgerBtn";
import AboutMe from "./Components/AboutMe/AboutMe";

import Clipboard from "react-clipboard.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function App() {
  return (
    <div className="App">
      <div className="app_socialContainer">
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
        <AboutMe />
      </div>
      <div className="app_right">
        <HamburgerBtn />
      </div>
    </div>
  );
}

export default App;
