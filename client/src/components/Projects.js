import React from "react"
import "./Projects.css"

import SingleProject from "./singleProject"

import blog1 from "../images/blogHome.png"
import blog2 from "../images/blogHome2.png"
import books from "../images/booksHome.png"
import books2 from "../images/booksHome2.png"
import budget from "../images/budgetHome.png"
import budget2 from "../images/budgetHome2.png"
import burger from "../images/burgerHome.png"
import burger2 from "../images/burgerHome2.png"
import covid from "../images/covidHome.png"
import covid2 from "../images/covidHome2.png"
import employee from '../images/employeeHome.png'
import employee2 from '../images/employeeHome2.png'
import grouped from '../images/groupedHome.png'
import grouped2 from '../images/groupedHome2.png'
import note from '../images/noteHome.png'
import note2 from '../images/noteHome.png'
import password from '../images/passwordHome.png'
import password2 from '../images/passwordHome2.png'
import team from '../images/teamHome.png'
import team2 from '../images/teamHome2.png'
import twitter from '../images/twitterHome.png'
import twiter2 from '../images/twitterHome2.png'
import weather from '../images/weatherHome.png'
import weather2 from '../images/weatherHome2.png'
import workout from '../images/workoutHome.png'
import workout2 from '../images/workoutHome2.png'

function Projects() {
  return (
    <div className="projectsContainer">
      <div className="projectsHeader">My Recent Works</div>
      <div className="projectsHeader2">
        I feel these works are an accurate description of what I am capable of.{" "}
        <br />
        Note: I am <span className="projectsColor">not</span> a UI/UX designer
      </div>
      <div className="singleProjectContainer">
      <SingleProject
        image1={blog1}
        title="Blog App"
        description="Application that allows users to read, create, and delete blog posts. Super simple but showed me alot about context API"
        tech="React, Javascript, CSS"
        repo="https://github.com/EDowning2000/BlogApp"
      />
      <SingleProject
        image1={covid}
        title="Covid 19 Tracker"
        description="Application that displays real time Covid data and displays it either by country or worldwide, as well as shows you tons of metrics on the specific data."
        tech="React, Javascript, Firebase, Css"
        repo="https://github.com/EDowning2000/Covid19Tracker"
      />
      <SingleProject
        image1={grouped}
        title="Grouped"
        description="Application that allows for people to make events and have other people view or join them online. Very beneficial for people moving to a new area and trying to find people with similar interests. My first large react application and its not the best ever but im proud of the old girl, a monumental stepping stone for me."
        tech="React, SCSS, Mongoose, Express, Node"
        repo="https://github.com/EDowning2000/Grouped"
      />

      <SingleProject image1={twitter}
      title="Twitter Clone"
      description='This is a working clone of twitter, that allows a user to make and read posts on my twitter feed. It looks and behaves very similar, and the right section has a real twitter timeline and some tweets I pinned. Finally I actually used a portion of that code for the tweet button that is found on all of these cards, I personally think its a super cool little feature 🐦'
      tech="React, Firebase, Css"
      repo="https://github.com/EDowning2000/TwitterClone"
      />
      
      
      </div>
    </div>
  )
}

export default Projects

{/* <SingleProject image1={}
      title=""
      description=''
      tech=""
      repo=""
      /> */}