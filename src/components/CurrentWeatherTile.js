import React from "react";
import "../css/CurrentWeatherTile/CurrentWeatherTile.css";
import CurrentWeatherLocationTile from "./CurrentWeatherLocationTile.js";
import CurrentWeatherTempTile from "./CurrentWeatherTempTile";

const CurrentWeatherTile = ({ currentConditions, forecast, location }) => {
    return (
        <div className="current__weather__tile">
            <div className="current__weather__tile--container">
                <CurrentWeatherLocationTile
                    currentConditions={currentConditions}
                    location={location}
                />
                <CurrentWeatherTempTile currentConditions={currentConditions} />
            </div>
        </div>
    );
};

export default CurrentWeatherTile;
