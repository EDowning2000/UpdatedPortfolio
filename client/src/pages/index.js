import React from "react"
import "./index.css"
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import mainLogo from "../images/emerLogo.png"

const IndexPage = () => (
  <div className="main">

<Helmet>
<script src="https://kit.fontawesome.com/e47e81ddf8.js" crossorigin="anonymous"></script>

    <title>Emerson Downing</title>

</Helmet>

    <Header />
    {/* <Intro />
    <About/>
    <Projects/>
    <Footer/> */}
  </div>
)

export default IndexPage
