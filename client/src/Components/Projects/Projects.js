import React, { useEffect } from 'react'
import './Projects.css'
import anime from "animejs/lib/anime.es.js";


function Projects() {
 const animateProjects = ()=>{
   anime({
     targets: '.myProjects',
     translateY: 200
   })
 }

 useEffect(()=>{
  animateProjects()
 },[])


  return (
    <div className="projects">
      <div className="myProjects">My Projects</div>
    </div>
  )
}

export default Projects
