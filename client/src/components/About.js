import React from 'react'
import './About.css'
import frontEndPic from '../images/frontEndPic.png'
import backEndPic from '../images/backEndPic.png'
import studentPic from '../images/studentPic.png'

function About() {
  return (
    
    <div className="aboutContainer">
      <div className="aboutMe">
        Hi, my name is Emerson Downing
      </div>
      <div className="aboutMeContinued">
        Since beginning my coding journey in late 2018, I have honed my skills as not only a good developer, but also an attractive personality for the job. I have worked remotely with partners on large projects, collaborated with multiple small groups towards a goal, and gained lots of experience in terms of finding answers to the problems at hand in just my few years of experience. I am focused, detail and improvement oriented, and always eager to learn and apply my skills whereever helpful!
      </div>

      <div className="aboutCards">
        <div className="cardFrontEnd">
          <img src={frontEndPic} className="frontEndPic"/>
        </div>
        <div className="cardBackEnd">
          <img src={backEndPic}/>
        </div>
        <div className="cardStudent">
          <img src={studentPic}/>
        </div>
      </div>








    </div>
      
    
  )
}

export default About
