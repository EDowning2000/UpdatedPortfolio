import React, { useEffect } from "react";
import "./Technologies.css";

import htmlPic from "../../Images/htmlIcon.ico";
import bootstrapPic from "../../Images/bootstrapIcon.png";
import cssPic from "../../Images/cssIcon.png";
import figmaPic from "../../Images/figmaIcon.png";
import firebasePic from "../../Images/firebaseIcon.png";
// import githubPic from "../../Images/githubPic.png";
import gitPic from "../../Images/gitIcon.png";
import handlebarsPic from "../../Images/handlebarsIcon.png";
import javascriptPic from "../../Images/javascriptIcon.png";
import jqueryPic from "../../Images/JqueryIcon.png";
import materialPic from "../../Images/materialIcon.png";
import mongoPic from "../../Images/mongoIcon.png";
import nodePic from "../../Images/nodeIcon.png";
import npmPic from "../../Images/npmIcon.png";
import reactPic from "../../Images/reactIcon.png";
import sassPic from "../../Images/sassIcon.png";
import sketchPic from "../../Images/sketchIcon.png";
import sqlPic from "../../Images/sqlIcon.png";
import herokuPic from "../../Images/herokuIcon.png";

import anime from "animejs/lib/anime.es.js";

function Technologies() {
  const animateTech = () => {
    anime({
      targets: ".technologies",
      translateY: 1800,
      delay: 100,
    });
  };

  useEffect(() => {
    animateTech();
  }, []);

  return (
    <div className="technologies">
      <div className="myTech">My Technologies</div>{" "}
      <div className="html">Markup</div>
      <div className="htmlTech">
        <div className="one">
          <img className="htmlLogo" src={htmlPic} alt="Html Logo" />
        </div>
        {/* <div className="htmlToolTip">HTML</div> */}
      </div>{" "}
      <div className="styling">Styling</div>
      <div className="stylingTech">
        <div className="two">
          <img className="cssLogo" src={cssPic} alt="Css Logo" />
        </div>
        {/* <div className="cssToolTip">CSS</div> */}
        <div className="three">
          <img
            className="materialLogo"
            src={materialPic}
            alt="Material UI Logo"
          />
        </div>
        <div className="four">
          <img
            className="bootstrapLogo"
            src={bootstrapPic}
            alt="Bootstrap Logo"
          />
        </div>
        <div className="five">
          <img className="sassLogo" src={sassPic} alt="Sass Logo" />
        </div>
      </div>{" "}
      <div className="js">JavaScript</div>
      <div className="jsTech">
        <div className="six">
          <img
            className="javascriptLogo"
            src={javascriptPic}
            alt="Javascript Logo"
          />
        </div>
        <div className="seven">
          <img className="reactLogo" src={reactPic} alt="React Logo" />
        </div>
        <div className="eight">
          <img className="jqueryLogo" src={jqueryPic} alt="Jquery Logo" />
        </div>
        <div className="nine">
          <img
            className="handlebarsLogo"
            src={handlebarsPic}
            alt="Handlebars Logo"
          />
        </div>
      </div>{" "}
      <div className="backend">Backend</div>
      <div className="backendTech">
        <div className="ten">
          <img className="nodeLogo" src={nodePic} alt="Node Logo" />
        </div>
        <div className="eleven">
          <img className="npmLogo" src={npmPic} alt="NPM Logo" />
        </div>
      </div>{" "}
      <div className="databases">Databases</div>
      <div className="databaseTech">
        <div className="twelve">
          <img className="mongoLogo" src={mongoPic} alt="Mongo Logo" />
        </div>
        <div className="thirteen">
          <img className="sqlLogo" src={sqlPic} alt="SQL Logo" />
        </div>
        <div className="fourteen">
          <img className="firebaseLogo" src={firebasePic} alt="Firebase Logo" />
        </div>
      </div>{" "}
      <div className="design">Design</div>
      <div className="designTech">
        <div className="fifteen">
          <img className="sketchLogo" src={sketchPic} alt="Sketch Logo" />
        </div>
        <div className="sixteen">
          <img className="figmaLogo" src={figmaPic} alt="Figma Logo" />
        </div>
      </div>{" "}
      <div className="deployment">Deployment</div>
      <div className="deploymentTech">
        <div className="seventeen">
          <img className="gitLogo" src={gitPic} alt="Git Logo" />
        </div>
        <div className="eighteen">
          <img className="herokuLogo" src={herokuPic} alt="Heroku Logo" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
