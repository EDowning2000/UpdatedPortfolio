import React from "react";
import "./IndividualProject.css";
import { TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import ghIcon from "../../../Images/githubPic.png";

function IndividualProject({
  individualPic,
  individualGHLink,
  individualTitle,
}) {
  return (
    <div className="projectsContainer">
      <div className="projectColumn">
        <img className="projectPhoto" src={individualPic} />

        <a classname="individualGH" href={individualGHLink} target="blank">
          <img className="ghIcon" src={ghIcon} />
        </a>
        <div className="twitterShare">
          <TwitterShareButton
            url={individualGHLink}
            options={{
              text:
                "This project from Emerson is pretty good, i can find it here =>",
              via: "EmersonDowning1",
            }}
          />
        </div>
      </div>
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
