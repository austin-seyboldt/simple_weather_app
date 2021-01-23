import WeatherApiInfo from "./WeatherApiInfo";
import DefaultData from "./DefaultData";

function FetchWeatherData(location) {
    const api_key = WeatherApiInfo.key;
    const baseRequestURL = "http://api.weatherapi.com/v1";
    const forecastEndpoint = "/forecast.json";
    if (typeof location == "undefined" || location == null) {
        location = "auto:ip";
    }
    const dayCount = 1;

    let forecastRequest = new Request(
        `${baseRequestURL}${forecastEndpoint}?key=${api_key}&q=${location}&days=${dayCount}`
    );

    let locationData = DefaultData;
    fetch(forecastRequest)
        .then((response) => {
            console.log("async request sent");
            if (!response.ok) {
                console.log("request failed");
                return;
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch(() => {
            return locationData;
        });
    return locationData;
}

export default FetchWeatherData;
