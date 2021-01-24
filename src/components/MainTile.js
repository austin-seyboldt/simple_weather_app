import React from "react";
import CurrentWeatherTile from "./CurrentWeatherTile";
import OptionsBar from "./OptionsBar";
import "../css/MainTile.css";

const MainTile = ({ currentConditions, forecast, location }) => {
    return (
        <div className="main__tile">
            <CurrentWeatherTile
                currentConditions={currentConditions}
                forecast={forecast}
                location={location}
            />
            <OptionsBar />
        </div>
    );
};

export default MainTile;
