import logo from './logo.svg';

import './App.css';

import Home from "./Pages/home";
import Alisa from "./Pages/alisa";
import Byron from "./Pages/byron";
import Rachitha from "./Pages/rachitha";
import Salmah from "./Pages/salmah";

import { Component } from 'react';
import { Route } from "react-router-dom"

class App extends Component {
  render()
  {
    return(
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/alisa" component={Alisa}/>
        <Route exact path="/byron" component={Byron}/>
        <Route exact path="/rachitha" component={Rachitha}/>
        <Route exact path="/salmah" component={Salmah}/>
      </div>
    )
  }
}

export default App;
