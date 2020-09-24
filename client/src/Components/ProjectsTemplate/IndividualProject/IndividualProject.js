import React from "react";
import "./IndividualProject.css";
import { TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import ghIcon from "../../../Images/githubPic.png";
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';


import image1 from "../../../Images/cssIcon.png";


function IndividualProject({
  individualPic,
  individualGHLink,
  individualTitle,
})

{
  return (
    <div className="projectsContainer">
      <div className="projectColumn">
        <div className="projectPhoto">


        <AwesomeSlider cssModule={AwesomeSliderStyles} >
    <div data-src={image1} />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
        </div>



        {/* <img className="projectPhoto" src={individualPic} /> */}

        <a classname="individualGH " href={individualGHLink} target="blank">
          <img className="ghIcon darken" src={ghIcon} />
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
        <div className="individualTrials">
          This is the trials and tribulations section where i can explain what
          was good, what was bad, what i had a hard time with and what i learned
        </div>
      </div>
    </div>
  );
}

export default IndividualProject;
