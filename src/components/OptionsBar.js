import React, { useContext } from "react";
import "../css/OptionsBar.css";
import { GlobalContext } from "./GlobalContext";

const OptionsBar = ({ toggleMenuFunction }) => {
    const { isDarkMode } = useContext(GlobalContext);
    return (
        <div className={`options__bar ${isDarkMode ? "dark__mode" : ""}`}>
            <div className="options__bar--container">
                <button
                    className="options__bar--menu__button"
                    onClick={toggleMenuFunction}
                >
                    <i
                        className="fas fa-bars"
                        id="option__bar--menu__button"
                    ></i>
                </button>
            </div>
        </div>
    );
};

export default OptionsBar;
