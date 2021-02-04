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
                <div>
                    <a
                        href="https://www.weatherapi.com/"
                        title="Free Weather API"
                        id="api__logo-menu"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                            alt="Weather data by WeatherAPI.com"
                            border="0"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
