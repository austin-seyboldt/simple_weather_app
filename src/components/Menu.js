import React from "react";
import MenuSearchBar from "./MenuSearchBar";
import Settings from "./Settings";
import "../css/Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu--container">
                <MenuSearchBar />
                <Settings />
            </div>
        </div>
    );
};

export default Menu;
