import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Contact from "./pages/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Home />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
