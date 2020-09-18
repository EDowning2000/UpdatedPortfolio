import React from "react";
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

function Technologies() {
  return (
    <div className="technologies">
      <div className="myTech">My Technologies</div>
      <div className="htmlTech">
        <div className="html">Markup</div>
        <img className="htmlLogo" src={htmlPic} alt="Html Logo"></img>
      </div>
      <div className="stylingTech">
        <div className="styling">Styling</div>
        <img className="cssLogo" src={cssPic} alt="Css Logo"></img>
        <img
          className="materialLogo"
          src={materialPic}
          alt="Material UI Logo"
        ></img>
        <img
          className="bootstrapLogo"
          src={bootstrapPic}
          alt="Bootstrap Logo"
        ></img>
        <img className="sassLogo" src={sassPic} alt="Sass Logo"></img>
      </div>
      <div className="jsTech">
        <div className="js">JavaScript</div>
        <img
          className="javascriptLogo"
          src={javascriptPic}
          alt="Javascript Logo"
        ></img>
        <img className="reactLogo" src={reactPic} alt="React Logo"></img>
        <img className="jqueryLogo" src={jqueryPic} alt="Jquery Logo"></img>
        <img
          className="handlebarsLogo"
          src={handlebarsPic}
          alt="Handlebars Logo"
        ></img>
      </div>
      <div className="backendTech">
        <div className="backend">Backend</div>
        <img className="nodeLogo" src={nodePic} alt="Node Logo"></img>
        <img className="npmLogo" src={npmPic} alt="NPM Logo"></img>
      </div>
      <div className="databaseTech">
        <div className="databases">Databases</div>
        <img className="mongoLogo" src={mongoPic} alt="Mongo Logo"></img>
        <img className="sqlLogo" src={sqlPic} alt="SQL Logo"></img>
        <img
          className="firebaseLogo"
          src={firebasePic}
          alt="Firebase Logo"
        ></img>
      </div>
      <div className="designTech">
        <div className="design">Design</div>
        <img className="sketchLogo" src={sketchPic} alt="Sketch Logo"></img>
        <img className="figmaLogo" src={figmaPic} alt="Figma Logo"></img>
      </div>
      <div className="deploymentTech">
        <div className="deployment">Deployment</div>
        <img className="gitLogo" src={gitPic} alt="Git Logo"></img>
        <img className="herokuLogo" src={herokuPic} alt="Heroku Logo"></img>
      </div>
    </div>
  );
}

export default Technologies;
