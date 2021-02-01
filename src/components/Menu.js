import React, { useContext } from "react";
import MenuSearchBar from "./MenuSearchBar";
import Settings from "./Settings";
import "../css/Menu.css";
import { GlobalContext } from "./GlobalContext";

const Menu = () => {
    const { isDarkMode } = useContext(GlobalContext);
    return (
        <div className={`menu ${isDarkMode ? "dark__mode" : ""}`}>
            <div className="menu--container">
                <MenuSearchBar />
                <Settings />
            </div>
        </div>
    );
};

export default Menu;
