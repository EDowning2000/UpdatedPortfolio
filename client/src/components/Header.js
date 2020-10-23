import React from "react"
import { Link } from "gatsby"
import mainLogo from "../images/emerLogo.png"
import "./Header.css"

function Header() {
  return (
    <>
      <div className="header">
        <img src={mainLogo} alt="Emerson Downing's Logo" />

        <div className="myLinks">
          <span>About Me</span>
          <span>Technologies</span>
          <span className="headerColored">Projects</span>
          <span>Contact Me</span>
        </div>
      </div>
    </>
  )
}

export default Header
