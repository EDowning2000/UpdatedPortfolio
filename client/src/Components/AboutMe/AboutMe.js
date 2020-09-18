import React, { useEffect } from "react";
import './AboutMe.css'
import anime from "animejs/lib/anime.es.js";


function AboutMe() {

  const animateAbt =()=>{
    anime({
      targets: '.aboutMe',
      translateY: 300
    })
  }

  useEffect(() => {
    animateAbt();
  }, []);



  return (
    <div className="aboutMe">
      <div className="header"> Hi, my name is Emerson Downing! </div>
      <div className="motto">
        I am a full-stack developer with a passion for beautiful and highly
        functional Front-End components, learning new technologies, and best
        practices
      </div>
    </div>
  );
}

export default AboutMe;
