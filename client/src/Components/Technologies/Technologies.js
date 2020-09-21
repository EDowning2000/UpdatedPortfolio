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

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import anime from "animejs/lib/anime.es.js";

function Technologies() {
  const animateTech1 = () => {
    anime({
      targets: ".technologies",
      translateY: 2500,
      delay: 100,
    });
  };

  useEffect(() => {
    animateTech1();
  }, []);

  return (
    <div className="technologies">
      <div className="myTech">My Technologies</div>
      <div className="html">Markup</div>
      <div className="htmlTech">
        <Tippy content="HTML" placement="bottom" duration="200">
          <img className="htmlLogo" src={htmlPic} alt="Html Logo" />
        </Tippy>
      </div>
      <div className="styling">Styling</div>
      <div className="stylingTech">
        <Tippy content="CSS" placement="bottom" duration="200">
          <img className="cssLogo" src={cssPic} alt="Css Logo" />
        </Tippy>

        <Tippy content="Material UI" placement="bottom" duration="200">
          <img
            className="materialLogo"
            src={materialPic}
            alt="Material UI Logo"
          />
        </Tippy>

        <Tippy content="Bootstrap" placement="bottom" duration="200">
          <img
            className="bootstrapLogo"
            src={bootstrapPic}
            alt="Bootstrap Logo"
          />
        </Tippy>

        <Tippy content="SASS" placement="bottom" duration="200">
          <img className="sassLogo" src={sassPic} alt="Sass Logo" />
        </Tippy>
      </div>
      <div className="js">JavaScript</div>
      <div className="jsTech">
        <Tippy content="Javascript (ES6)" placement="bottom" duration="200">
          <img
            className="javascriptLogo"
            src={javascriptPic}
            alt="Javascript Logo"
          />
        </Tippy>
        <Tippy content="React" placement="bottom" duration="200">
          <img className="reactLogo" src={reactPic} alt="React Logo" />
        </Tippy>
        <Tippy content="Jquery" placement="bottom" duration="200">
          <img className="jqueryLogo" src={jqueryPic} alt="Jquery Logo" />
        </Tippy>
        <Tippy content="HandlebarsJS" placement="bottom" duration="200">
          <img
            className="handlebarsLogo"
            src={handlebarsPic}
            alt="Handlebars Logo"
          />
        </Tippy>
      </div>
      <div className="backend">Backend</div>
      <div className="backendTech">
        <Tippy content="NodeJS" placement="bottom" duration="200">
          <img className="nodeLogo" src={nodePic} alt="Node Logo" />
        </Tippy>
        <Tippy content="npm" placement="bottom" duration="200">
          <img className="npmLogo" src={npmPic} alt="NPM Logo" />
        </Tippy>
      </div>
      <div className="databases">Databases</div>
      <div className="databaseTech">
        <Tippy content="MongoDb (Mongoose)" placement="bottom" duration="200">
          <img className="mongoLogo" src={mongoPic} alt="Mongo Logo" />
        </Tippy>
        <Tippy content="MySQL (Sequelize)" placement="bottom" duration="200">
          <img className="sqlLogo" src={sqlPic} alt="SQL Logo" />
        </Tippy>
        <Tippy content="Firebase" placement="bottom" duration="200">
          <img className="firebaseLogo" src={firebasePic} alt="Firebase Logo" />
        </Tippy>
      </div>
      <div className="design">Design</div>
      <div className="designTech">
        <Tippy content="Sketch" placement="bottom" duration="200">
          <img className="sketchLogo" src={sketchPic} alt="Sketch Logo" />
        </Tippy>

        <Tippy content="Figma" placement="bottom" duration="200">
          <img className="figmaLogo" src={figmaPic} alt="Figma Logo" />
        </Tippy>
      </div>
      <div className="deployment">Deployment</div>
      <div className="deploymentTech">
        <Tippy content="Git" placement="bottom" duration="200">
          <img className="gitLogo" src={gitPic} alt="Git Logo" />
        </Tippy>

        <Tippy content="Heroku" placement="bottom" duration="200">
          <img className="herokuLogo" src={herokuPic} alt="Heroku Logo" />
        </Tippy>
      </div>
    </div>
  );
}

export default Technologies;
