import React from "react"
import "./About.css"
import frontEndPic from "../images/frontEndPic.png"
import backEndPic from "../images/backEndPic.png"
import studentPic from "../images/studentPic2.png"

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutMe">Hi, my name is Emerson Downing</div>
      <div className="aboutMeContinued">
        Since beginning my coding journey in late 2018, I have honed my skills
        as not only a good developer, but also an attractive personality for the
        job. I have worked remotely with partners on large projects,
        collaborated with multiple small groups towards a goal, and gained lots
        of experience in terms of finding answers to the problems at hand in
        just my few years of experience. I am focused, detail and improvement
        oriented, and always eager to learn and apply my skills whereever
        helpful!
      </div>

      <div className="aboutCards">
        <div className="cardFrontEnd">
          <img src={frontEndPic} className="aboutPic" />
          <div className="cardMain">Front-end Developer</div>
          <div className="cardMain2">
            As a Front-end dev, I value reusable, clean, functional, and
            responsive components and solutions in order to allow the end user a
            friendly and easy product to use.
          </div>
          <div className="cardLanguages1">Languages I Use</div>
          <div className="cardTech">
            <span>HTML</span>
            <span>CSS</span>
            <span>SASS</span>
            <div className="separator"></div>

            <span>JavaScript</span>
            <span>React</span>
            <span>HandleBars</span>
          </div>
          <div className="cardMain3">Tools I Use</div>
          <div className="cardTools2">

          </div>

        </div>
        <div className="cardBackEnd">
          <img src={backEndPic} className="aboutPic" />
          <div className="cardMain">Back-end Developer</div>
          <div className="cardMain2">
            As a Back-end dev, I have found a passion for not only visualizing
            data, but also collecting it. Through my back-end skills I can
            really make a product fully functional, and bring nearly any idea to
            life.
          </div>
          <div className="cardLanguages2">Languages I Use</div>
          <div className="cardTech">
            <span>Node</span>
            <span>Express</span>
            <span>Mongo</span>
            <span>mySQL</span>
          </div>
          <div className="cardTools"></div>

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
            <span>UCF Bootcamp</span>
            <span>Dev Ed</span>
            <div className="separator"></div>
            <span>Traversy Media</span>
            <span>Egghead.io</span>
            <div className="separator"></div>
            <span>Mosh Hamedani</span>
          </div>
          <div className="cardTools"></div>
        </div>
      </div>
    </div>
  )
}

export default About
