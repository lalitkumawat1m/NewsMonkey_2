import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Componants/Navbar';
import News from './Componants/News';
// import Table from './Componants/Table';




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News key="general" pageSize={36} category="general"/></Route>
          <Route exact path="/business"><News key="business" pageSize={36} category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={36} category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={36} category="general"/></Route>
          <Route exact path="/health"><News key="health" pageSize={36} category="health"/></Route>
          <Route exact path="/science"><News key="science" pageSize={36} category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={36} category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={36} category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

