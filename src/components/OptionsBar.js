import React from "react";
import "../css/OptionsBar.css";

const OptionsBar = ({ toggleMenuFunction }) => {
    return (
        <div className="options__bar">
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
