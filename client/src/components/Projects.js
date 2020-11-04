import React from "react"
import "./Projects.css"

import SingleProject from "./singleProject"

import blog from "../images/blogHome.png"
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
        image1={blog}
        title="Blog App"
        description="Application that allows users to read, create, and delete blog posts. Super simple but showed me alot about context API and how global state works in general"
        tech="React, Javascript, CSS"
        repo="https://github.com/EDowning2000/BlogApp"
      />
      <SingleProject
        image1={covid}
        title="Covid 19 Tracker"
        description="Application that displays real time Covid data and displays it either by country or worldwide, as well as shows you tons of metrics on the specific data such as new cases and recovered."
        tech="React, Javascript, Firebase, Css"
        repo="https://github.com/EDowning2000/Covid19Tracker"
      />
      <SingleProject
        image1={grouped}
        title="Grouped"
        description="Application that allows for users to sign in to make events, as well as browse events that other people have posted based off of a zip code that you enter into your posting."
        tech="React, SCSS, Mongoose, Express, Node"
        repo="https://github.com/EDowning2000/Grouped"
      />

      <SingleProject image1={twitter}
      title="Twitter Clone"
      description='This is a working clone of twitter, that allows a user to make and read posts on my twitter feed. PS: check out the tweet button on these cards, its the same one i used in this app.'
      tech="React, Firebase, Css"
      repo="https://github.com/EDowning2000/TwitterClone"
      /> 
      <SingleProject image1={weather}
      title="Weather Dashboard"
      description="An basic weather application, it allows you to search, save, and the view the weather for any city you please. This application helped me to get familiar with the use of API's"
      tech="Javascript, HTML, Css"
      repo="https://github.com/EDowning2000/weather-dashboard"
      />
      <SingleProject image1={books}
      title="Book Finder"
      description="Application that allows the user to search google's book api, see a description and other information about the books, and save them to a virtual library"
      tech="React, Mongoose, Node, Express, Css"
      repo="https://github.com/EDowning2000/Books"
      />
      <SingleProject image1={budget}
      title="Budget Tracker"
      description="The user can either input, or withdraw money from a virtual account, and then their saving and spending habits are displayed in a nice graph to make it easier to visualize."
      tech="Javascript, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/BudgetTrackerPWA"
      />
      <SingleProject image1={employee}
      title="Employee Tracker"
      description="This application allows the user to search through a database of employees, the user can search by first name, last name, or phone number in this app."
      tech="React, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/EmployeeTracker3.0"
      />
      <SingleProject image1={workout}
      title="Workout Tracker"
      description="This application allows a user to define what type of exercise they are doing, input the stats of the exercise, and then shows them the breakdown in two different graphs"
      tech="React, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/WorkoutTracker"
      />
      <SingleProject image1={note}
      title="Budget Tracker"
      description="The user can either input, or withdraw money from a virtual account, and then their saving and spending habits are displayed in a nice graph to make it easier to visualize."
      tech="Javascript, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/BudgetTrackerPWA"
      />
      <SingleProject image1={burger}
      title="Budget Tracker"
      description="The user can either input, or withdraw money from a virtual account, and then their saving and spending habits are displayed in a nice graph to make it easier to visualize."
      tech="Javascript, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/BudgetTrackerPWA"
      /><SingleProject image1={password}
      title="Budget Tracker"
      description="The user can either input, or withdraw money from a virtual account, and then their saving and spending habits are displayed in a nice graph to make it easier to visualize."
      tech="Javascript, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/BudgetTrackerPWA"
      /><SingleProject image1={team}
      title="Budget Tracker"
      description="The user can either input, or withdraw money from a virtual account, and then their saving and spending habits are displayed in a nice graph to make it easier to visualize."
      tech="Javascript, Node, Express, Mongo, Css"
      repo="https://github.com/EDowning2000/BudgetTrackerPWA"
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