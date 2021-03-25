import React from "react";
import Header from "./header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./home/Home";
import Menu from "./menu/Menu";
import Tools from "./tools/Tools";
import Database from "./database/Database";
import Columns from "./columns/Columns";
import Operations from "./operations/Operations";
import Requests from "./requests/Requests";
import Partwo from "./partwo/Partwo";
import Tables from "./tables/Tables";


import "./App.css";

function App() {
  return (
    <div>
        <Header />
        <Router>
            <div>
                <Menu />
               
                <div id="infoContainer">
                <Switch>
                    <Route path="/requests">
                        <Requests />
                    </Route>
                    <Route path="/tables">
                        <Tables />
                    </Route>
                    <Route path="/partwo">
                        <Partwo />
                    </Route>
                    <Route path="/operations">
                        <Operations />
                    </Route>
                    <Route path="/columns">
                        <Columns />
                    </Route>
                    <Route path="/database">
                        <Database />
                    </Route>
                    <Route path="/tools">
                        <Tools />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    </div>
  );
}

export default App;
