import React from "react"
import "./singleProject.css"

function singleProject({image1, description, title, tech, repo}) {
  return (
    <div className="singleMainContainer">
      <img src={image1} className="singleImage" />
      <div className="singleContainer">
        <div className="singleTitle">{title}</div>
        <div className="singleDescription">{description}</div>
        <div className="singleTech">{tech}</div>
        <div className="singleRepo">{repo}</div>
      </div>
    </div>
  )
}

export default singleProject
