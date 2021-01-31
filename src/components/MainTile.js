import React, { useState, useEffect, useContext } from "react";
import CurrentWeatherTile from "./CurrentWeatherTile";
import OptionsBar from "./OptionsBar";
import Menu from "./Menu";
import CentralContent from "./CentralContent";
import "../css/MainTile.css";
import { GlobalContext } from "./GlobalContext";

const MainTile = () => {
    const { location } = useContext(GlobalContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            return !prev;
        });
    };

    return (
        <div className="main__tile">
            <CurrentWeatherTile />
            {isMenuOpen ? <Menu /> : <CentralContent />}

            <OptionsBar toggleMenuFunction={toggleMenu} />
        </div>
    );
};

export default MainTile;
