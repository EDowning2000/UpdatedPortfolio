import React from "react"
import "./Intro.css"
import emerPic from "../images/emerPic.png"
import computerThings from "../images/computerThings3.png"
// import anime from "animejs/lib/anime.es.js"

function Intro() {
  return (
    <div className="introMain">
      <div className="introMe">Full Stack Developer</div>
      <div className="introMeAbout">
        I design and implement beautiful solutions to modern problems
      </div>
      <div className="introAvatar">
        <img className="introPic" src={emerPic} alt="animated version of me" />
      </div>
      <img
        src={computerThings}
        alt="various programming items"
        className="introThings"
      />
    </div>
  )
}

export default Intro
