import React from "react";

const CurrentWeatherTempTile = ({ currentConditions }) => {
    // Temporary parsing of info -> will clean up later
    const [temp, hi, lo] = [
        currentConditions.temp_f,
        currentConditions.maxtemp_f,
        currentConditions.mintemp_f,
    ];

    return (
        <div className="current__weather__temp__tile">
            <h1 className="temp current__temp">{temp}</h1>
            <span className="temp current__hi__lo">Hi: {hi}</span>
            <span className="temp current__hi__lo">Lo: {lo}</span>
        </div>
    );
};

export default CurrentWeatherTempTile;
