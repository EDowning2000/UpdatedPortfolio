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
      <div className="app_main">
        <div className="app_header">Hi, my name is Emerson Downing</div>
        <div className="app_phrase">
          I am a full-stack developer with a passion for beautiful and highly
          functional Front-End components, learning new technologies, and best
          practices
        </div>
        <div className="app_follow">Follow Me</div>
        <div className="app_socialContainer">
          <img src={linkedInPic} className="app_linkedIn"></img>
          <img src={ghPic} className="app_github"></img>
          <img src={twitterPic} className="app_twitter"></img>
          <img src={igPic} className="app_instagram"></img>
          <img src={gmailPic} className="app_gmail"></img>
        </div>
      </div>
    </div>
  );
}

export default App;
