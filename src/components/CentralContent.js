import React from "react";
import FiveDayForecastBar from "./FiveDayForecastBar";
import "../css/CentralContent.css";

const CentralContent = () => {
    return (
        <div className="central__content">
            <div className="central__content--container">
                <FiveDayForecastBar />
            </div>
        </div>
    );
};

export default CentralContent;
