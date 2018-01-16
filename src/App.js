import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Project_one from "./pages/Project_one";
import Project_two from "./pages/Project_two";
import Project_three from "./pages/Project_three";
import Contact from "./pages/Contact";

import * as Scroll from "react-scroll";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
          <Background />
          <Project_one />
          <Project_two />
          <Project_three />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
