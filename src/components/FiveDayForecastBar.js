import React, { useContext } from "react";
import "../css/ForecastBar.css";
import { GlobalContext } from "./GlobalContext";
import { DaysofTheWeek } from "../DaysofTheWeek";

const ForecastBarItem = ({ forecast }) => {
    const { isCelsius } = useContext(GlobalContext);
    const { date, day } = forecast;
    const dayText = DaysofTheWeek[new Date(date).getDay()];

    const minTemp = isCelsius ? day.mintemp_c : day.mintemp_f;
    const maxTemp = isCelsius ? day.maxtemp_c : day.maxtemp_f;
    return (
        <div className="forecast__bar__item">
            <div className="forecast__bar__item--container">
                <p className="">{dayText}</p>
                <img src={day.condition.icon} alt="" />
                <div>
                    <span className="temp">{minTemp}</span>
                    <span>/</span>
                    <span className="temp">{maxTemp}</span>
                </div>
            </div>
        </div>
    );
};

const FiveDayForecastBar = () => {
    const { forecast, isDarkMode } = useContext(GlobalContext);
    return (
        <div
            className={`five__day__forecast__bar ${
                isDarkMode ? "dark__mode" : ""
            }`}
        >
            <div className="five__day__forecast__bar--container">
                {forecast.slice(0, 5).map((day) => {
                    return <ForecastBarItem forecast={day} key={day.date} />;
                })}
            </div>
        </div>
    );
};

export default FiveDayForecastBar;
