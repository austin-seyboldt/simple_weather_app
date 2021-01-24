import WeatherApiInfo from "./WeatherApiInfo";
import DefaultData from "./DefaultData";

const FetchWeatherData = async (location, setLocationData) => {
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

    try {
        const response = await fetch(forecastRequest);
        if (!response.ok) {
            console.log("request failed");
            return;
        }
        let data = await response.json();
        setLocationData(data);
        return;
    } catch (err) {
        console.log("error occurred");
    }
};

export default FetchWeatherData;
