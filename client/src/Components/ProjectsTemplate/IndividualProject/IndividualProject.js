import React from "react";
import "./IndividualProject.css";
import { TwitterShareButton } from "react-twitter-embed";
import ghIcon from "../../../Images/githubPic.png";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";

function IndividualProject({
  individualGHLink,
  individualTitle,
  image1,
  image2,
  // image3,
  individualDescription,
  individualTrials, 
  individualTech
}) {
  return (
    <div className="projectsContainer">
      <div className="projectColumn">
        <div className="projectPhoto">
          <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div data-src={image1} />
            <div data-src={image2} />
            {/* <div data-src={image3} /> */}
          </AwesomeSlider>
        </div>

        {/* <img className="projectPhoto" src={individualPic} /> */}

        <a classname="individualGH " href={individualGHLink} target="blank">
          <img className="ghIcon darken" src={ghIcon} alt="github icon" />
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
        <div className="individualTitle">{individualTitle}</div>
        <div className="individualDescription">{individualDescription}</div>

        <div className="individualTrials">{individualTrials}</div>
        <div className="techUsed">{individualTech}</div>
      </div>
    </div>
  );
}

export default IndividualProject;
