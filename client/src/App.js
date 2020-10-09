import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import igPic from "../src/Images/instagramPic.jpg";
import ghPic from "../src/Images/githubPic.png";
import gmailPic from "../src/Images/gmailPic.jpeg";
import twitterPic from "../src/Images/twitterPic.jpg";
import linkedInPic from "../src/Images/LinkedInPic.png";
import AboutMe from "./Components/AboutMe/AboutMe";
import Technologies from "./Components/Technologies/Technologies";
import Projects from "./Components/ProjectsTemplate/Projects";
import IndividualProject from "./Components/ProjectsTemplate/IndividualProject/IndividualProject";

import Clipboard from "react-clipboard.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import anime from "animejs/lib/anime.es.js";

function App() {
  const [openMenu, setOpenMenu] = useState("false");
  const [open, setOpen] = useState("menu-btn");
  const [hide, setHide] = useState("app_hideElement");
  const [show, setShow] = useState("");
  const [copy, setCopy] = useState("Click To Copy!");

  const openSesame = () => {
    //code to open and hide other portions of the center potion based on the links tab
    if (openMenu === "false") {
      setOpenMenu("true");
      setOpen("menu-btn open");
      setHide("");
      setShow("app_showElement");
    } else {
      setOpenMenu("false");
      setOpen("menu-btn");
      setHide("app_hideElement");
      setShow("");
    }
  };
  const randomClose = () => {
    setShow("");
    setHide("app_hideElement");
    setOpenMenu("false");
    setOpen("menu-btn");
  };

  const animateSocial1 = () => {
    anime({
      targets: ".app_follow",
      translateY: 685,
      delay: 100,
    });
  };
  const animateSocial2 = () => {
    anime({
      targets: ".app_linkedInHover",
      translateY: 685,
      delay: 200,
    });
  };
  const animateSocial3 = () => {
    anime({
      targets: ".app_githubHover",
      translateY: 685,
      delay: 300,
    });
  };
  const animateSocial4 = () => {
    anime({
      targets: ".app_twitterHover",
      translateY: 685,
      delay: 400,
    });
  };
  const animateSocial5 = () => {
    anime({
      targets: ".app_instagramHover",
      translateY: 685,
      delay: 500,
    });
  };
  const animateSocial6 = () => {
    anime({
      targets: ".app_gmailHover",
      translateY: 685,
      delay: 600,
    });
  };

  const animateRight = () => {
    anime({
      targets: ".app_right",
      translateY: 100,
      delay: 100,
    });
  };

  useEffect(() => {
    animateSocial1();
    animateSocial2();
    animateSocial3();
    animateSocial4();
    animateSocial5();
    animateSocial6();
    // animateMain();
    animateRight();
  }, []);

  const copyFunc = () => {
    setCopy("Copied!");
  };

  return (
    <div className="App">
      <Router>
        <div className="app_topContainer" id="app_topContainer">
          <div className="app_follow">Follow Me</div>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://www.linkedin.com/in/emerson-downing-baaa43195/"
              target="blank"
              className="app_linkedInHover"
            >
              <img
                src={linkedInPic}
                className="app_linkedIn socialLink"
                alt="LinkedIn Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://github.com/EDowning2000"
              target="blank"
              className="app_githubHover"
            >
              <img
                src={ghPic}
                className="app_github socialLink"
                alt="Github Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://twitter.com/EmersonDowning1"
              target="blank"
              className="app_twitterHover"
            >
              <img
                src={twitterPic}
                className="app_twitter socialLink"
                alt="Twitter Logo"
              ></img>
            </a>
          </Tippy>
          <Tippy content="Click Me!" placement="right" duration="500">
            <a
              href="https://www.instagram.com/emersondowning__/?hl=en"
              target="blank"
              className="app_instagramHover"
            >
              <img
                src={igPic}
                className="app_instagram socialLink"
                alt="Instagram Logo"
              ></img>
            </a>
          </Tippy>
          <Clipboard
            data-clipboard-text="emersondowning@gmail.com"
            className="app_gmailHover"
            onClick={copyFunc}
          >
            <Tippy
              content={copy}
              interactive={true}
              placement="right"
              duration="500"
            >
              <img
                src={gmailPic}
                className="app_gmail socialLink"
                alt="Gmail Logo"
              ></img>
            </Tippy>
          </Clipboard>
        </div>

        <div className="app_me">
          <div className={show}>
            <Switch>
              <Route exact path="/" component={AboutMe} />
              <Route exact path="/technologies" component={Technologies} />
              <Route exact path="/projects" component={Projects} />
              {/* <Route exact path='/proj1' exact component={IndividualProject}></Route> */}
              <Route path="/grouped">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/Grouped"
                  individualTitle="Grouped"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application allows for the user to find and create meetups and parties in their area. It is ideal for people moving to new areas and searching for people with common interests or just things to do!"
                  individualTrials="This application gave me some pretty big problems as it was my first really large react application. I wasnt great with components, moving around data, or being able to figure out things like a filter function in order to make the searching of events possible. However it did teach me about how powerful react can be, routing, a bit about components, and styling."
                  individualTech="HTML, SCSS, React, Node, Express, Mongo, Sketch, Heroku"
                />
              </Route>
              <Route path="/covid">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/Covid19Tracker"
                  individualTitle="Covid 19 Tracker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is an application that gets all of the most recent covid 19 data and displayss it in multiple different ways that are easy for the user to take in and digest. It shows it on a map, chart, as well as you are able to switch between different countries or just do the entire world if that is what the user desires."
                  individualTrials="This application gave me quite a few troubles when it came to the graphs, as well as the map that i used via leaflet. Both were new technologies to me and didnt come super naturally. Through this application, I gained some experience with both of them and also got a lot more comfortable with react hooks as opposed to writing classes for all of my components like I had done in the past."
                  individualTech="HTML, CSS, React, Heroku"
                />
              </Route>
              <Route path="/workout">
                {" "}
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/WorkoutTracker"
                  individualTitle="Workout Tracker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application allows you to track your workouts whether it be cardio or resistance training. Upon completing your workout it displays all of your statistics in a pie graph in terms of sets, time, and weight."
                  individualTrials="This application gave me some troubles in terms of setting up the data visualization, as well as getting the mongo database deployed to the server. In the end it really helped me mostly with deployment and brushing up on some basic react concepts."
                  individualTech="HTML, CSS, React, Node, Express, Mongo, Heroku"
                />
              </Route>
              <Route path="/blog">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/BlogApp"
                  individualTitle="Blog App"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is a really basic application that allows you to make blog posts, as well as filter them by category."
                  individualTrials="This application gave me some troubles with the Context API portion as it was really difficult to wrap my head around the global state thought process. In the end it showed me about a good structured react app, as well as served as a nice intro to global state in a pretty basic way"
                  individualTech="HTML, CSS, React, Express, Node, Mongo"
                />
              </Route>
              <Route path="/twitter">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/TwitterClone"
                  individualTitle="Twitter Clone"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is a clone of Twitters UI, it also allows the user to make tweets from my account and have them displayed in the feed box. Also there is a portion on the right side where you can view my actual tweets, as well as click the tweet button(same one that is below all the photos on each project), and have a tweet drafted from your account that you can see before posting."
                  individualTrials="This application gave me some troubles in terms of using firebase for the first time. Also implementing the widgets on the right side was a bit of a challenge. In the end i learned how to deploy from firebase, as well as send and get information from your database which was really nice as it allows for a really rapid development cycle."
                  individualTech="HTML, CSS, React, MaterialUI, Firebase"
                />
              </Route>
              <Route path="/employee">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/EmployeeTracker3.0"
                  individualTitle="Employee Tracker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is a very basic application that would be used by corporations in order to track a list of employees and show some of their statistics, you can also type in to search through the database of employees."
                  individualTrials="This application gave me some troubles in terms of searching through the API data, as well as getting the users rendered everytime you type a letter as opposed to when you directly search for their entire name. This was a fantastic skill to learn and this project really taught me to think through react applications in a different sense."
                  individualTech="HTML, CSS, React"
                />
              </Route>
              <Route path="/book">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/Books"
                  individualTitle="Books"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application uses googles book api in order to search and find any book through many different parameters. This is really helpful as it can also allow you to add books to your favorites, and then go back to see them and hopefully read them in the future!"
                  individualTrials="Honestly this application didnt give me much trouble. In the end it just allowed me to brush up on the back end concepts such as the routes, schema, and most importantly the controllers. "
                  individualTech="HTML, CSS, React, Node, Express, Mongo, Heroku"
                />
              </Route>
              <Route path="/budget">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/BudgetTrackerPWA"
                  individualTitle="Budget Tracker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application allows a user to track their budget by adding and subtracting funds. It also displays the data in a nice graph for the user to see."
                  individualTrials="The back end of this project was the portion that gave me the most troubles, getting the routes, and database working in order to display the data to the user was a little bit of a task. Yet another great project to brush up and improve my node and database skills."
                  individualTech="HTML, CSS, Javascript, Node, Express, Mongo, Heroku"
                />
              </Route>
              <Route path="/password">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/password-generator"
                  individualTitle="Password Generator"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application prompts the user with popups (i was just beginning and this seemed reasonable), in order to see what parameters their password needs to include. Finally it generates their password in the provided space."
                  individualTrials="This was a bit difficult in terms of sifting through the parameters and then generating a truly random password, I also dabbled in trying to get a click to copy to clipboard function but it was too much for my noob brain to handle. In the end this taught me quite a bit about basic JS in terms of arrays, loops, and if statements."
                  individualTech="HTML, CSS, Javascript"
                />
              </Route>
              <Route path="/weather">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/weather-dashboard"
                  individualTitle="Weather Dashboard"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application allows you to see the weather for any given city for the day, as well as in 5 hour incriments"
                  individualTrials="This was one of my first JS sites and the whole process of appending cards to the html file as well as drilling into an API was tricky at first, luckily after this i became really comfortable with both of those."
                  individualTech="HTML, CSS, Javascript"
                />
              </Route>
              <Route path="/note">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/Note-Taker"
                  individualTitle="Note Taker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This application allows the user to take, as well as edit notes for them to use at a different time. It saves the notes and allows them to be accessed later."
                  individualTrials="This application gave me troubles specifically in terms of the get, put, and update requests to the server. In the end it helped me brush up on that knowledge but wasnt the most helpful project in the world if im being honest. "
                  individualTech="HTML, CSS, Javascript, Node, Express"
                />
              </Route>
              <Route path="/burger">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/burger"
                  individualTitle="Burger Tracker"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is an application where you can add a burger to the queue and then you can devour it and then it is put into a different section of the application. "
                  individualTrials="This applicatoin gave me troubles in terms of learning how to render the data with handlebars as well as getting situated with the MVC mentality that you need in order to use a front end templating engine. I struggled quite a bit with the syntax of handlebars and found the setup to be a bit difficult. In the end it was a good skill to learn but showed me also how powerful and feature rich react can be as opposed to something like this. "
                  individualTech="HTML, CSS, Javascript, Handlebars, Node, Express, mySql"
                />
              </Route>
              <Route path="/team">
                <IndividualProject
                  individualGHLink="https://github.com/EDowning2000/TeamProfileGenerator"
                  individualTitle="Team Profile Generator"
                  image1=""
                  image2=""
                  image3=""
                  individualDescription="This is a node CLI application that allows for a user to input information about their working team in the terminal when running the application and then the information that they submit to node will then populate the HTML file based on the several templates that have been created."
                  individualTrials="This application gave me troubles in terms of getting all the different npm packages properly installed and used. Having to read through the documentation of all of them was tricky but this project proved how powerful of a skill that can be."
                  individualTech="HTML, CSS, Node, Javascript"
                />
              </Route>
            </Switch>
          </div>

          <div className={hide}>
            <div className="links">
              <NavLink
                to="/"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 onClick={randomClose} className="homeLink">
                  Home
                </h1>
              </NavLink>
              {/* <h1>Home</h1> */}
              <NavLink
                to="/projects"
                className="projectsLink"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 className="projectsLink" onClick={randomClose}>
                  Projects
                </h1>
              </NavLink>

              <NavLink
                to="/technologies"
                className="technologyLink"
                activeClassName="links"
                activeStyle={{ textDecoration: "none" }}
              >
                <h1 onClick={randomClose} className="technologyLink">
                  Technologies
                </h1>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="app_right">
          <div className={open} onClick={openSesame}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
