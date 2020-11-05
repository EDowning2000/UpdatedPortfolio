import React from "react"
import "./About.css"
import frontEndPic from "../images/frontEndPic.png"
import backEndPic from "../images/backEndPic.png"
import studentPic from "../images/studentPic2.png"

function About() {
  return (
    <>
      <div className="aboutBackground"></div>
      <div className="aboutContainer" id="about">
        <div className="aboutMe">Hi, my name is Emerson Downing</div>
        <div className="aboutMeContinued">
          Since beginning my coding journey in late 2018, I have honed my skills
          as not only a good developer, but also an attractive personality for
          the job. I have worked remotely with partners on large projects,
          collaborated with multiple small groups towards a goal, and gained
          lots of experience in terms of finding answers to the problems at hand
          in just my few years of experience. I am focused, detail and
          improvement oriented, and always eager to learn and apply my skills
          whereever helpful!
        </div>

        <div className="aboutCards" id="technologies">
          <div className="cardFrontEnd">
            <img src={frontEndPic} className="aboutPic" />
            <div className="cardMain">Front-end Developer</div>
            <div className="cardMain2">
              As a Front-end dev, I value reusable, clean, functional, and
              responsive components and solutions in order to allow the end user
              a friendly and easy product to use.
            </div>
            <div className="cardLanguages1">Languages I Use</div>
            <div className="cardTech">
              <span className="cardPadding">HTML </span>
              <span className="cardPadding">CSS </span>
              <span className="cardPadding">SASS </span>
              <div className="separator"></div>

              <span className="cardPadding">JavaScript </span>
              <span className="cardPadding">React </span>
              <span className="cardPadding">HandleBars </span>
            </div>
            <div className="cardMain4">Tools I Use</div>
            <div className="cardTools1">
              <span className="cardPadding">BootStrap </span>
              <span className="cardPadding">Figma </span>
              <div className="separator"></div>
              <span className="cardPadding">Material-UI </span>
              <span className="cardPadding">Sketch </span>
            </div>
          </div>
          <div className="cardBackEnd">
            <img src={backEndPic} className="aboutPic" />
            <div className="cardMain">Back-end Developer</div>
            <div className="cardMain2">
              As a Back-end dev, I have found a passion for not only visualizing
              data, but also collecting it. Through my back-end skills I can
              really make a product fully functional, and bring nearly any idea
              to life.
            </div>
            <div className="cardLanguages2">Languages I Use</div>
            <div className="cardTech">
              <span className="cardPadding">Node </span>
              <span className="cardPadding">Express </span>
              <span>Mongo </span>
              <span className="cardPadding">mySQL </span>
            </div>
            <div className="cardMain5">Tools I Use</div>
            <div className="cardTools2">
              <span className="cardPadding">Postman </span>
              <span className="cardPadding">Sql-WorkBench </span>
              <div className="separator"></div>
              <span className="cardPadding">Robo 3T </span>
            </div>
          </div>

          <div className="cardStudent">
            <img src={studentPic} className="aboutPic3" />
            <div className="cardMain">Student</div>
            <div className="cardMain2">
              As a student, I have not only fallen in love with the art that is
              good code, but also with the process of learning technologies that
              can not only make my life easier, but also the lives of others.{" "}
            </div>
            <div className="cardLanguages3">Resources I Use</div>
            <div className="cardTech">
              <span className="cardPadding">UCF Bootcamp </span>
              <span className="cardPadding">Dev Ed </span>
              <div className="separator"></div>
              <span className="cardPadding">Traversy Media </span>
              <span className="cardPadding">Egghead.io </span>
              <div className="separator"></div>
              <span className="cardPadding">Mosh Hamedani </span>
            </div>
            <div className="cardMain6">How I Learn</div>
            <div className="cardTools3">
              <span className="cardPadding">Documentation </span>
              <span className="cardPadding">Tutorials </span>
              <div className="separator"></div>
              <span className="cardPadding">Full Courses </span>
              <span className="cardPadding">Problem Sets </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
