import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";
import "../css/DayStats.css";

const DayStat = ({ name, value }) => {
    return (
        <div className="day__stat">
            <p className="stat__name">{name}</p>
            <p className="stat__value">{value}</p>
        </div>
    );
};

const DayStats = () => {
    const { forecast, isCelsius, isDarkMode } = useContext(GlobalContext);
    return (
        <div className={`day__stats ${isDarkMode ? "dark__mode" : ""}`}>
            <div className="day__stats__container">
                <div className="day__stat__row">
                    <DayStat name="Sunrise" value={forecast[0].astro.sunrise} />
                    <DayStat name="Sunset" value={forecast[0].astro.sunset} />
                </div>
                <div className="day__stat__row">
                    <DayStat
                        name="Chance of rain"
                        value={`${forecast[0].day.daily_chance_of_rain}%`}
                    />
                    <DayStat
                        name="Humidity"
                        value={`${forecast[0].day.avghumidity}%`}
                    />
                </div>
                <div className="day__stat__row">
                    <DayStat
                        name="Max wind speed"
                        value={
                            isCelsius
                                ? `${forecast[0].day.maxwind_kph}kph`
                                : `${forecast[0].day.maxwind_mph}mph`
                        }
                    />
                    <DayStat name="UV index" value={forecast[0].day.uv} />
                </div>
            </div>
        </div>
    );
};

export default DayStats;
