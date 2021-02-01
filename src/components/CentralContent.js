import React from "react";
import FiveDayForecastBar from "./FiveDayForecastBar";
import "../css/CentralContent.css";
import HourlyForecast from "./HourlyForecast";
import DayStats from "./DayStats";

const CentralContent = () => {
    return (
        <div className="central__content">
            <div className="central__content--container">
                <FiveDayForecastBar />
                <div className="today__container">
                    <HourlyForecast />
                    <DayStats />
                </div>
            </div>
        </div>
    );
};

export default CentralContent;
