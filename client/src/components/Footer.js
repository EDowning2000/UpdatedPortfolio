import React from "react"
import "./Footer.css"
import mainLogo from "../images/emerLogo.png"

function Footer() {
  return (
    <div className="footerContainer" id="contact">
      <img className="footerLogo" src={mainLogo} />
      <div className="footerMotto">Making lives easier with software.</div>

      <span className="footerFind">Find me here!</span>
      <div className="linkContainer">
        <a href="https://twitter.com/EmersonDowning1" target="blank">
          <div className="fab fa-twitter fa-2x"></div>
        </a>
        <a href="https://github.com/EDowning2000" target="blank">
          <div className="fab fa-github fa-2x"></div>
        </a>
        <a
          href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
          target="blank"
        >
          <div className="fab fa-linkedin-in fa-2x"></div>
        </a>

        <a href="https://www.instagram.com/emersondowning_/" target="blank">
          <div className="fab fa-instagram fa-2x"></div>
        </a>
      </div>

      <div className="footerMade">Made with 🖤 by Emerson Downing</div>
    </div>
  )
}

export default Footer
