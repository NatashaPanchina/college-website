import React from "react";
import  {NavLink} from "react-router-dom";

import "./Menu.css";

function Menu() {
    return (
    <nav id="leftMenu">
        <div>
            <NavLink exact to="/" 
                activeClassName="selected">Введение в MySQL</NavLink>
        </div>
        <div>
            <NavLink exact to="/tools"
               activeClassName="selected">Инструменты для разработки</NavLink>
        </div>
        <div>
            <NavLink exact to="/database"
                activeClassName="selected">База данных и таблицы</NavLink>
        </div>
        <div>
            <NavLink exact to="/columns"
                activeClassName="selected">Изменение таблиц и строк</NavLink>
        </div>
        <div>
            <NavLink exact to="/operations"
                activeClassName="selected">Основные операции с данными</NavLink>
        </div>
        <div>
            <NavLink exact to="/requests"
                activeClassName="selected">Запросы. Часть 1</NavLink>
        </div>
        <div>
            <NavLink exact to="/partwo"
                activeClassName="selected">Запросы. Часть 2</NavLink>
        </div>
        <div>
            <NavLink exact to="/tables"
                activeClassName="selected">Присоединение таблиц</NavLink>
        </div>
    </nav>
    );
}

export default Menu;