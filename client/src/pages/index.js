import React from "react"
import "./index.css"
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"

const IndexPage = () => (
  <div className="main">
    <Header />
    <Intro />
    <About/>
  </div>
)

export default IndexPage
