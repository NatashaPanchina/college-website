import React from "react";
import logo from "./logo.png";
import "./Header.css";

function Header() {
    return (
        <div id="header" >
            <div >
            <a href="/">
                <img src={logo} alt="logo" height="50"></img>
                <span id="title">SQL Tutorials</span>
            </a>
            </div>
        </div>
    );
}

export default Header;