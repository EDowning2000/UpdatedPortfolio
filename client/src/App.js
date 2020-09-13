import React from "react";
import "./App.css";
import igPic from "../src/Images/instagramPic.jpg";
import ghPic from "../src/Images/githubPic.png";
import gmailPic from "../src/Images/gmailPic.jpeg";
import twitterPic from "../src/Images/twitterPic.jpg";
import linkedInPic from "../src/Images/LinkedInPic.png";

function App() {
  return (
    <div className="App">
      <div className="app_socialContainer">
        <div className="app_follow">Follow Me</div>
        <img
          src={linkedInPic}
          className="app_linkedIn"
          alt="LinkedIn Logo"
        ></img>
        <img src={ghPic} className="app_github" alt="Github Logo"></img>
        <img src={twitterPic} className="app_twitter" alt="Twitter Logo"></img>
        <img src={igPic} className="app_instagram" alt="Instagram Logo"></img>
        <img src={gmailPic} className="app_gmail" alt="Gmail Logo"></img>
      </div>

      <div className="app_me">
        <div className="app_header">Hi, my name is Emerson Downing!</div>
        <div className="app_motto">
          I am a full-stack developer with a passion for beautiful and highly
          functional Front-End components, learning new technologies, and best
          practices
        </div>
      </div>
      <div className="app_right">
        im a placeholder
      </div>
    </div>
  );
}

export default App;
