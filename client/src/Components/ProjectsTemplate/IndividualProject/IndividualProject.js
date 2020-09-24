import React from "react";
import "./IndividualProject.css";
import { TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function IndividualProject({
  individualPic,
  individualGHLink,
  individualTitle,
}) {
  return (
    <div className="projectsColumn">
      <img className="projectPhoto" src={individualPic} />
      <a classname="individualGH" href={individualGHLink} target="blank">
        <i class="fab fa-github"></i>
      </a>
      <TwitterShareButton
        url={individualGHLink}
        options={{
          text:
            "This project from Emerson is pretty good, i can find it here =>",
          via: "EmersonDowning1",
        }}
      />
      <div className="projectsColumn2">
        <div className="individualTitle">Filler title goes here</div>
        <div className="individualDescription">
          this is a long description that will be filled with a prop here soon
          but im just using it as a filler at the moment
        </div>
        <div className="techUsed">HTML CSS Javascript React</div>
        <dic className="individualTrials">
          This is the trials and tribulations section where i can explain what
          was good, what was bad, what i had a hard time with and what i learned
        </dic>
      </div>
    </div>
  );
}

export default IndividualProject;
