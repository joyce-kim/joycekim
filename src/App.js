import React, { Component } from 'react';
import Home from "./pages/Home";
import Background from "./pages/Background";
import Projects from "./pages/Projects";
import Project_one from "./pages/Project_one";
import Project_two from "./pages/Project_two";
import Project_three from "./pages/Project_three";
import Contact from "./pages/Contact";

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Background />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
