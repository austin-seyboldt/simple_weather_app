import React, { useState } from "react";
import CurrentWeatherTile from "./CurrentWeatherTile";
import OptionsBar from "./OptionsBar";
import Menu from "./Menu";
import CentralContent from "./CentralContent";
import "../css/MainTile.css";

const MainTile = ({
    currentConditions,
    forecast,
    location,
    updateLocation,
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            return !prev;
        });
    };

    return (
        <div className="main__tile">
            <CurrentWeatherTile
                currentConditions={currentConditions}
                forecast={forecast}
                location={location}
            />
            {isMenuOpen ? (
                <Menu updateLocation={updateLocation} />
            ) : (
                <CentralContent />
            )}

            <OptionsBar toggleMenuFunction={toggleMenu} />
        </div>
    );
};

export default MainTile;
