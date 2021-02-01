import React from "react";
import FiveDayForecastBar from "./FiveDayForecastBar";
import "../css/CentralContent.css";
import HourlyForecast from "./HourlyForecast";

const CentralContent = () => {
    return (
        <div className="central__content">
            <div className="central__content--container">
                <FiveDayForecastBar />
                <HourlyForecast />
            </div>
        </div>
    );
};

export default CentralContent;
