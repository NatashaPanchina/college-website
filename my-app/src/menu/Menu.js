import React from "react";
import  {NavLink} from "react-router-dom";

import "./Menu.css";

function Menu() {
    return (
    <nav id="leftMenu">
        <div>
            <NavLink exact to="/" 
                activeClassName="selected">NySQL Intro</NavLink>
        </div>
        <div>
            <NavLink exact to="/tools"
               activeClassName="selected">MySQL Tools</NavLink>
        </div>
        <div>
            <NavLink exact to="/database"
                activeClassName="selected">Database and tables</NavLink>
        </div>
        <div>
            <NavLink exact to="/columns"
                activeClassName="selected">Changing tables and columns</NavLink>
        </div>
        <div>
            <NavLink exact to="/operations"
                activeClassName="selected">Basic data operations</NavLink>
        </div>
        <div>
            <NavLink exact to="/requests"
                activeClassName="selected">Requests. Part 1</NavLink>
        </div>
        <div>
            <NavLink exact to="/partwo"
                activeClassName="selected">Requests. Part 2</NavLink>
        </div>
        <div>
            <NavLink exact to="/tables"
                activeClassName="selected">Joining tables</NavLink>
        </div>
    </nav>
    );
}

export default Menu;