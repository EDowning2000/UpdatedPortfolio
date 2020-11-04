import React from "react"
import mainLogo from "../images/emerLogo.png"
import { Link, animateScroll as scroll } from "react-scroll"
import "./Header.css"

function Header() {
  return (
    <>
      <div className="header">
        <img
          src={mainLogo}
          alt="Emerson Downing's Logo"
          className="headerPic"
        />

        <div className="myLinks">

          <Link
            className="myLinks1"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
          <Link
            className="myLinks2"
            activeClass="active"
            to="technologies"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Technologies
          </Link>
          <Link
            className="myLinks3"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="myLinks4"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </Link>

          {/* <span className="myLinks1">About Me</span>
          <span className="myLinks2">Technologies</span>
          <span className="myLinks3">Projects</span>
          <span className="myLinks4">Contact Me</span> */}
        </div>
      </div>
    </>
  )
}

export default Header
