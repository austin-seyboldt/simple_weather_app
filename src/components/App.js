import React, { useState } from "react";
import "../css/App.css";
import MainTile from "./MainTile";
import FetchWeatherData from "../FetchWeatherData";

const App = () => {
    const getCurrentConditions = () => {
        const { current } = currentLocationData;
        const dayConditions = currentLocationData.forecast.forecastday[0].day;
        const { mintemp_f, maxtemp_f, mintemp_c, maxtemp_c } = dayConditions;
        [
            current.mintemp_f,
            current.maxtemp_f,
            current.mintemp_c,
            current.maxtemp_c,
        ] = [mintemp_f, maxtemp_f, mintemp_c, maxtemp_c];

        return current;
    };

    const getForecast = () => {
        return currentLocationData.forecast;
    };

    const getNewLocationData = (newLocation) => {
        if (currentLocation === newLocation) {
            return;
        }
        setLocationData(() => {
            FetchWeatherData(newLocation);
        });
    };

    const [currentLocation, setLocation] = useState("New York");
    const [currentLocationData, setLocationData] = useState(
        FetchWeatherData(currentLocation)
    );
    const [currentConditions, setCurrentConditions] = useState(
        getCurrentConditions()
    );
    const [forecast, setForecast] = useState(() => getForecast);

    console.log(currentLocationData);
    return (
        <div className="app">
            <MainTile
                currentConditions={currentConditions}
                forecast={forecast}
                location={currentLocationData.location}
            />
        </div>
    );
};

export default App;
