import React, { useContext, useState, useEffect } from "react";
import "../css/HourlyForecast.css";
import { GlobalContext } from "./GlobalContext";
import { DaysofTheWeek } from "../DaysofTheWeek";

const ForecastHour = ({ forecast, isApple, convertDateForApple }) => {
    const { isCelsius } = useContext(GlobalContext);
    const inTime = isApple ? convertDateForApple(forecast.time) : forecast.time;
    const hour = new Date(inTime);
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
    const [isApple, setIsApple] = useState(false);

    const convertDateForApple = (date) => {
        return date.replace(/-/g, "/");
    };

    const getForecastHours = () => {
        let forecastHours = forecast[0].hour.filter((hour) => {
            const time = isApple ? convertDateForApple(hour.time) : hour.time;
            let newHour = new Date(time).getHours();
            return newHour >= localTime && newHour < localTime + 10;
        });
        if (hourCount - forecastHours.length > 0) {
            forecastHours = forecastHours.concat(
                forecast[1].hour.slice(0, hourCount - forecastHours.length)
            );
        }

        return forecastHours;
    };

    useEffect(() => {
        if (navigator.userAgent.match(/(iPhone | iPod | iPad)/) != null) {
            setIsApple(true);
        }
    }, []);

    return (
        <div className={`hourly__forecast ${isDarkMode ? "dark__mode" : ""}`}>
            <h1 className="hourly__forecast--header">10 Hour Forecast</h1>
            <ul className="hourly__forecast__list">
                {getForecastHours().map((hour) => {
                    return (
                        <ForecastHour
                            isApple={isApple}
                            convertDateForApple={convertDateForApple}
                            forecast={hour}
                            key={hour.time}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default HourlyForecast;
