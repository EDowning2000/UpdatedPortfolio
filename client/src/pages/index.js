import React from "react"
import "./index.css"
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

const IndexPage = () => (
  <div className="main">

<Helmet>

  
</Helmet>

    <Header />
    <Intro />
    <About/>
    <Projects/>
    <Footer/>
  </div>
)

export default IndexPage
