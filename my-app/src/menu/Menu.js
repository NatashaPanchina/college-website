import React from "react";
import  {NavLink} from "react-router-dom";

import "./Menu.css";

function Menu() {
    return (
    <nav id="leftMenu">
        <div>
            <NavLink exact to="/" 
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>NySQL Intro</NavLink>
        </div>
        <div>
            <NavLink exact to="/tools"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>MySQL Tools</NavLink>
        </div>
        <div>
            <NavLink exact to="/database"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Database and tables</NavLink>
        </div>
        <div>
            <NavLink exact to="/columns"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Changing tables and columns</NavLink>
        </div>
        <div>
            <NavLink exact to="/operations"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Basic data operations</NavLink>
        </div>
        <div>
            <NavLink exact to="/requests"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Requests. Part 1</NavLink>
        </div>
        <div>
            <NavLink exact to="/partwo"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Requests. Part 2</NavLink>
        </div>
        <div>
            <NavLink exact to="/tables"
                activeStyle={{
                fontWeight: 450,
                color: "#daa520",
                }}>Joining tables</NavLink>
        </div>
    </nav>
    );
}

export default Menu;