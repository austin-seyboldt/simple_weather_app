import React from "react";

const CurrentWeatherLocationTile = ({ location, currentConditions }) => {
    const city = location.name;
    const conditions = currentConditions.condition.text;

    return (
        <div className="current__weather__location__tile">
            <h2 className="current__location__text">{city}</h2>
            <h3 className="current__conditions__text">{conditions}</h3>
        </div>
    );
};

export default CurrentWeatherLocationTile;
