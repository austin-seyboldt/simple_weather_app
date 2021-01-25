import React, { useState, useEffect } from "react";
import "../css/App.css";
import MainTile from "./MainTile";
import FetchWeatherData from "../FetchWeatherData";
import DefaultData from "../DefaultData";

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

    const updateLocation = (newLocation) => {
        console.log("in update location");
        if (newLocation === currentLocation || newLocation === "") {
            return;
        } else {
            setLocation(newLocation);
        }
    };

    const [currentLocation, setLocation] = useState("");
    const [currentLocationData, setLocationData] = useState(DefaultData);
    const [forecast, setForecast] = useState(DefaultData.forecast);
    const [currentConditions, setCurrentConditions] = useState(
        getCurrentConditions()
    );

    useEffect(() => {
        FetchWeatherData(currentLocation, setLocationData);
    }, [currentLocation]);

    useEffect(() => {
        setForecast(() => getForecast());
        setCurrentConditions(() => getCurrentConditions());
    }, [currentLocationData]);

    return (
        <div className="app">
            <MainTile
                currentConditions={currentConditions}
                forecast={forecast}
                location={currentLocationData.location}
                updateLocation={updateLocation}
            />
        </div>
    );
};

export default App;
