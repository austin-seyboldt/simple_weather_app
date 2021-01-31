import React, { useContext } from "react";
import "../css/CurrentWeatherTile.css";
import { GlobalContext } from "./GlobalContext";

const CurrentWeatherLocationTile = () => {
    const { location, currentConditions } = useContext(GlobalContext);
    const city = location.name;
    const conditions = currentConditions.condition.text;

    return (
        <div className="current__weather__location__tile">
            <h2 className="current__location__text">{city}</h2>
            <h3 className="current__conditions__text">{conditions}</h3>
        </div>
    );
};

const CurrentWeatherTempTile = () => {
    const { currentConditions, isCelsius } = useContext(GlobalContext);
    // Temporary parsing of info -> will clean up later
    const temp = isCelsius
        ? currentConditions.temp_c
        : currentConditions.temp_f;
    const lo = isCelsius
        ? currentConditions.mintemp_c
        : currentConditions.mintemp_f;
    const hi = isCelsius
        ? currentConditions.maxtemp_c
        : currentConditions.maxtemp_f;

    return (
        <div className="current__weather__temp__tile">
            <h1 className="temp current__temp">{temp}</h1>
            <span className="temp current__hi__lo">Hi: {hi}</span>
            <span className="temp current__hi__lo">Lo: {lo}</span>
        </div>
    );
};

const CurrentWeatherTile = () => {
    return (
        <div className="current__weather__tile">
            <div className="current__weather__tile--container">
                <CurrentWeatherLocationTile />
                <CurrentWeatherTempTile />
            </div>
        </div>
    );
};

export default CurrentWeatherTile;
