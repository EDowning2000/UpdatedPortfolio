import React from "react"
import "./index.css"
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from '../components/Projects'

const IndexPage = () => (
  <div className="main">
    <Header />
    <Intro />
    <About/>
    <Projects/>
  </div>
)

export default IndexPage
