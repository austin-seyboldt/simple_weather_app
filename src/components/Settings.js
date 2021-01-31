import React, { useContext } from "react";
import "../css/Menu.css";
import { GlobalContext } from "./GlobalContext";

const SettingsToggle = ({ value, onClick }) => {
    return (
        <label className="settings__toggle">
            <input type="checkbox" defaultChecked={value} onClick={onClick} />
            <span className="settings__toggle--slider"></span>
        </label>
    );
};

const Settings = () => {
    const { isCelsius, setIsCelsius } = useContext(GlobalContext);
    return (
        <div className="settings">
            <div className="settings__container"></div>
            <ul className="settings__list">
                <li className="settings__list--item">
                    <p>
                        Change units to {isCelsius ? "Fahrenheit" : "Celsius"}
                    </p>
                    <SettingsToggle
                        value={isCelsius}
                        onClick={() => setIsCelsius(!isCelsius)}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Settings;
