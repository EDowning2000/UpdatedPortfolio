import React from "react"
import "./singleProject.css"
import ghPic from "../images/githubPic2.png"

import TwitterShareButton from "react-twitter-embed"

function singleProject({ image1, description, title, tech, repo }) {
  return (
    <div className="singleMainContainer">
      <img src={image1} className="singleImage" />
      <div className="singleContainer">
        <div className="singleTitle">{title}</div>
        <div className="singleDescription">{description}</div>
        <div className="singleTech">{tech}</div>
        <div className="repoInfo">
          <div className="twitterPic">
          <TwitterShareButton
          
            url={repo}
            options={{
              text:
                "This project from Emerson is pretty good, i can find it here =>",
              via: "EmersonDowning1",
            }}
          /></div>
          <a href={repo} target="blank" className="repoPic">
            <img src={ghPic} className="repoPic" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default singleProject
