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

function Projects() {
  return (
    <div className="projectsContainer">
      <div className="projectsHeader">My Recent Works</div>
      <div className="projectsHeader2">
        I feel these works are an accurate description of what I am capable of.{" "}
        <br />
        Note: I am <span className="projectsColor">not</span> a UI/UX designer
      </div>
      <div className="singleProjectContainer"></div>
      <SingleProject
        image1={blog1}
        title="Blog App"
        description="this applicaton is an application that allows you to create, read, delete blog posts through your own website. Its pretty nifty i must say."
        tech="HTML, css, javascript, react"
        repo="asdlfkjlasjdf"
      />
    </div>
  )
}

export default Projects
