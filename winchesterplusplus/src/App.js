import logo from "./logo.svg";

import "./App.css";

import Home from "./Pages/home";
import Alisa from "./Pages/alisa";
import Byron from "./Pages/byron";
import Rachitha from "./Pages/rachitha";
import Salmah from "./Pages/salmah";
import Alisa2 from "./Pages/alisa2";
import Alisacat from "./Pages/alisacat";
import Alisaart from "./Pages/alisaart";
import Alisaarh from "./Pages/alisaarh";
import Alisagames from "./Pages/alisagames";
import { Component } from "react";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/alisa2" component={Alisa2} />
        <Route exact path="/alisa" component={Alisa} />
        <Route exact path="/alisacat" component={Alisacat} />
        <Route exact path="/alisaart" component={Alisaart} />
        <Route exact path="/alisaarh" component={Alisaarh} />
        <Route exact path="/alisagames" component={Alisagames} />
        <Route exact path="/byron" component={Byron} />
        <Route exact path="/rachitha" component={Rachitha} />
        <Route exact path="/salmah" component={Salmah} />
        <Route export path="/rachitha2" component={Apple} />
      </div>
    );
  }
}

export default App;
