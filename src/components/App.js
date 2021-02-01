import React, { useState, useEffect } from "react";
import "../css/App.css";
import MainTile from "./MainTile";
import FetchWeatherData from "../FetchWeatherData";
import DefaultData from "../DefaultData";
import { GlobalContext } from "./GlobalContext";

const App = () => {
    const updateLocation = (newLocation) => {
        console.log("in update location");
        console.log(newLocation);
        if (newLocation === currentLocation || newLocation === "") {
            return;
        } else {
            setLocation(newLocation);
        }
    };

    const [currentLocation, setLocation] = useState("");
    const [currentLocationData, setLocationData] = useState(DefaultData);
    const [forecast, setForecast] = useState(DefaultData.forecast.forecastday);
    const [currentConditions, setCurrentConditions] = useState(
        DefaultData.current
    );
    const [isCelsius, setIsCelsius] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [localTime, setLocalTime] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        FetchWeatherData(currentLocation, setLocationData, setIsLoading);
    }, [currentLocation]);

    useEffect(() => {
        let current = currentLocationData.current;
        const dayConditions = currentLocationData.forecast.forecastday[0].day;
        const { mintemp_f, maxtemp_f, mintemp_c, maxtemp_c } = dayConditions;
        [
            current.mintemp_f,
            current.maxtemp_f,
            current.mintemp_c,
            current.maxtemp_c,
        ] = [mintemp_f, maxtemp_f, mintemp_c, maxtemp_c];
        setCurrentConditions(current);
        setForecast(currentLocationData.forecast.forecastday);
        setLocalTime(
            new Date(currentLocationData.location.localtime).getHours()
        );
    }, [currentLocationData]);

    // useEffect(() => {
    //     console.log("executing use effect");
    //     setForecast(getForecast());
    //     setCurrentConditions(getCurrentConditions());
    // }, [currentLocationData]);

    return (
        <GlobalContext.Provider
            value={{
                forecast,
                currentConditions,
                location: currentLocationData.location,
                updateLocation,
                isCelsius,
                setIsCelsius,
                localTime,
                isDarkMode,
                setIsDarkMode,
            }}
        >
            {isLoading ? (
                <h1 className="loading__page">Loading...</h1>
            ) : (
                <div className="app">
                    <MainTile />
                </div>
            )}
            <a
                href="https://www.weatherapi.com/"
                title="Free Weather API"
                id="api__logo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                    alt="Weather data by WeatherAPI.com"
                    border="0"
                ></img>
            </a>
        </GlobalContext.Provider>
    );
};

export default App;
