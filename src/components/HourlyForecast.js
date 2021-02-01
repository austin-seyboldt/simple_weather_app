import React, { useContext, useState } from "react";
import "../css/HourlyForecast.css";
import { GlobalContext } from "./GlobalContext";
import { DaysofTheWeek } from "../DaysofTheWeek";

const ForecastHour = ({ forecast }) => {
    const { isCelsius } = useContext(GlobalContext);
    const hour = new Date(forecast.time);
    const time = hour.getHours();
    let temp = isCelsius ? forecast.temp_c : forecast.temp_f;
    temp = parseInt(temp);

    return (
        <li className="forecast__hour">
            <p className="forecast__hour--item">{`${
                time !== 0 ? (time > 12 ? time - 12 : time) : 12
            }${time < 12 ? "am" : "pm"}`}</p>
            <p className="forecast__hour--item temp">{temp}</p>
        </li>
    );
};

// Defaults to 10 hour forecast
const HourlyForecast = () => {
    const { forecast, localTime, isDarkMode } = useContext(GlobalContext);
    const [hourCount, setHourCount] = useState(10);

    const getForecastHours = () => {
        let forecastHours = forecast[0].hour.filter((hour) => {
            return new Date(hour.time).getHours() >= localTime;
        });
        forecastHours = forecastHours.concat(
            forecast[1].hour.slice(0, hourCount - forecastHours.length)
        );
        return forecastHours;
    };

    return (
        <div className={`hourly__forecast ${isDarkMode ? "dark__mode" : ""}`}>
            <h1 className="hourly__forecast--header">10 Hour Forecast</h1>
            <ul className="hourly__forecast__list">
                {getForecastHours().map((hour) => {
                    return <ForecastHour forecast={hour} key={hour.time} />;
                })}
            </ul>
        </div>
    );
};

export default HourlyForecast;
