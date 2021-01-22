import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Structure from "./structure";
import Operations from "./operations";
import Requests from "./requests";
import Tables from "./tables";
import Functions from "./functions";

export default function Menu() {
    return (
        <Router>
            <div>
                <nav id="leftMenu">
                    <div>
                        <Link to="/about">About autor</Link>
                    </div>
                    <div>
                        <Link to="/">NySQL Intro</Link>
                    </div>
                    <div>
                        <Link to="/structure">Data structure</Link>
                    </div>
                    <div>
                        <Link to="/operations">Basic data operations</Link>
                    </div>
                    <div>
                        <Link to="/requests">Requests</Link>
                    </div>
                    <div>
                        <Link to="/tables">Joining tables</Link>
                    </div>
                    <div>
                        <Link to="/functions">Built-in functions</Link>
                    </div>
                </nav>

                <Switch>
                    <Route path="/requests">
                        <Requests />
                    </Route>
                    <Route path="/tables">
                        <Tables />
                    </Route>
                    <Route path="/functions">
                        <Functions />
                    </Route>
                    <Route path="/operations">
                        <Operations />
                    </Route>
                    <Route path="/structure">
                        <Structure />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}