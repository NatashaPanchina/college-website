import React from "react";
import "./Header.css";

function Header() {
    
    return (
        <div id="header" >
            <div >
            <a href="/">
                <img src="https://cdn.glitch.com/845af469-fd7a-40aa-93dd-3d9e2746d3d0%2Flogo.png?v=1616518929406" alt="logo" height="50"></img>
                <span id="title">SQL Tutorials</span>
            </a>
            </div>
        </div>
    );
}

export default Header;