import React from "react";
import MenuSearchBar from "./MenuSearchBar";
import "../css/Menu.css";

const Menu = ({ updateLocation }) => {
    return (
        <div className="menu">
            <div className="menu--container">
                <MenuSearchBar updateLocation={updateLocation} />
            </div>
        </div>
    );
};

export default Menu;
