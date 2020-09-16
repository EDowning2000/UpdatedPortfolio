import React from "react";
import "./Links.css";
import { Link } from "react-router-dom";

function Links(hidden) {
  return (
    <div className="links">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      {/* <Link to="/projects"> */}
        <h1>Projects</h1>
      {/* </Link> */}
      {/* <Link to="/technologies"> */}
        <h1>Technologies</h1>
      {/* </Link> */}
    </div>
  );
}

export default Links;
