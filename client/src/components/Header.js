import React from "react"
import { Link } from "gatsby"
import mainLogo from "../images/emerLogo.png"
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
          <span className="myLinks1">About Me</span>
          <span className="myLinks2">Technologies</span>
          <span className="myLinks3">Projects</span>
          <span className="myLinks4">Contact Me</span>
        </div>
      </div>
    </>
  )
}

export default Header
